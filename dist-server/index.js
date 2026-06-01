import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { getUser, setupAuth } from './replitAuth.js';
import apiRouter from './api.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = parseInt(process.env.PORT || '5000');
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'vue-chicken-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    },
}));
setupAuth(app);
app.use('/api', apiRouter);
app.get('/api/auth/user', async (req, res) => {
    const user = await getUser(req);
    if (!user)
        return res.json(null);
    res.json(user);
});
if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, '../dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
