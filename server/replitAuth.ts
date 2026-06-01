import { Request, Response, NextFunction, Express } from 'express'
import * as client from 'openid-client'
import pool from './db.js'

interface ReplitUser {
  id: string
  username: string
  email?: string
  profileImage?: string
}

declare module 'express-session' {
  interface SessionData {
    userId?: string
    user?: ReplitUser
    codeVerifier?: string
    state?: string
    nonce?: string
    issuerUrl?: string
  }
}

async function getOidcConfig(issuerUrl: string): Promise<client.Configuration> {
  return await client.discovery(
    new URL(issuerUrl),
    process.env.REPL_ID!,
    undefined,
    undefined,
    { execute: [client.allowInsecureRequests] }
  )
}

function getIssuerUrl(): string {
  return process.env.ISSUER_URL || 'https://replit.com/oidc'
}

function getCallbackUrl(req: Request): string {
  const host = req.get('host') || process.env.REPLIT_DEV_DOMAIN || 'localhost:5000'
  const proto = host.includes('replit') || host.includes('localhost') === false ? 'https' : 'http'
  return `${proto}://${host}/api/auth/callback`
}

export function setupAuth(app: Express) {
  app.get('/api/auth/login', async (req: Request, res: Response) => {
    try {
      const issuerUrl = getIssuerUrl()
      const config = await getOidcConfig(issuerUrl)
      const redirectUri = getCallbackUrl(req)
      const codeVerifier = client.randomPKCECodeVerifier()
      const codeChallenge = await client.calculatePKCECodeChallenge(codeVerifier)
      const state = client.randomState()
      const nonce = client.randomNonce()

      req.session.codeVerifier = codeVerifier
      req.session.state = state
      req.session.nonce = nonce
      req.session.issuerUrl = issuerUrl

      const params: Record<string, string> = {
        redirect_uri: redirectUri,
        scope: 'openid profile email',
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        state,
        nonce,
      }

      const authUrl = client.buildAuthorizationUrl(config, new URLSearchParams(params))
      res.redirect(authUrl.toString())
    } catch (err) {
      console.error('Login error:', err)
      res.status(500).json({ error: 'Login failed' })
    }
  })

  app.get('/api/auth/callback', async (req: Request, res: Response) => {
    try {
      const issuerUrl = req.session.issuerUrl || getIssuerUrl()
      const config = await getOidcConfig(issuerUrl)
      const redirectUri = getCallbackUrl(req)
      const codeVerifier = req.session.codeVerifier!
      const expectedState = req.session.state!
      const expectedNonce = req.session.nonce!

      const currentUrl = new URL(
        req.url,
        `${req.protocol}://${req.get('host')}`
      )

      const tokens = await client.authorizationCodeGrant(config, currentUrl, {
        pkceCodeVerifier: codeVerifier,
        expectedState,
        expectedNonce,
        idTokenExpected: true,
      })

      const claims = tokens.claims()!
      const userId = String(claims.sub)
      const username = String(claims.preferred_username || claims.name || userId)
      const email = claims.email ? String(claims.email) : null
      const profileImage = claims.profile_image_url ? String(claims.profile_image_url) : null

      await pool.query(
        `INSERT INTO users (id, username, email) VALUES ($1, $2, $3)
         ON CONFLICT (id) DO UPDATE SET username = EXCLUDED.username, email = EXCLUDED.email`,
        [userId, username, email]
      )

      req.session.userId = userId
      req.session.user = { id: userId, username, email: email || undefined, profileImage: profileImage || undefined }

      delete req.session.codeVerifier
      delete req.session.state
      delete req.session.nonce
      delete req.session.issuerUrl

      res.redirect('/')
    } catch (err) {
      console.error('Callback error:', err)
      res.redirect('/?auth_error=callback_failed')
    }
  })

  app.get('/api/auth/logout', (req: Request, res: Response) => {
    req.session.destroy(() => {
      res.redirect('/')
    })
  })
}

export async function getUser(req: Request): Promise<ReplitUser | null> {
  if (req.session?.user) return req.session.user
  return null
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.userId) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  next()
}
