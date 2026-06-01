async function request(method: string, path: string, body?: any) {
  const res = await fetch(`/api${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API ${method} ${path} failed: ${res.status} ${text}`)
  }
  return res.json()
}

export const api = {
  get: (path: string) => request('GET', path),
  post: (path: string, body: any) => request('POST', path, body),
  patch: (path: string, body: any) => request('PATCH', path, body),
  delete: (path: string) => request('DELETE', path),
}
