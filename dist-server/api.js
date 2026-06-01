import { Router } from 'express';
import { requireAuth, getUser } from './replitAuth.js';
import pool from './db.js';
const router = Router();
router.use(requireAuth);
async function uid(req) {
    const user = await getUser(req);
    return user.id;
}
function row2camel(row) {
    const out = {};
    for (const k of Object.keys(row)) {
        const camel = k.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        out[camel] = row[k];
    }
    return out;
}
router.get('/batches', async (req, res) => {
    const userId = await uid(req);
    const { rows } = await pool.query('SELECT * FROM batches WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    res.json(rows.map(row2camel));
});
router.post('/batches', async (req, res) => {
    const userId = await uid(req);
    const d = req.body;
    const { rows } = await pool.query(`INSERT INTO batches (user_id, name, mode, breed, start_date, initial_count, current_count, status, notes, target_weight, target_age_weeks, purchase_cost_per_bird, currency)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`, [userId, d.name, d.mode, d.breed, d.startDate, d.initialCount, d.currentCount, d.status || 'active', d.notes, d.targetWeight, d.targetAgeWeeks, d.purchaseCostPerBird, d.currency]);
    res.json(row2camel(rows[0]));
});
router.patch('/batches/:id', async (req, res) => {
    const userId = await uid(req);
    const d = req.body;
    const fields = ['name', 'mode', 'breed', 'start_date', 'initial_count', 'current_count', 'status', 'notes', 'target_weight', 'target_age_weeks', 'purchase_cost_per_bird', 'currency'];
    const keys = ['name', 'mode', 'breed', 'startDate', 'initialCount', 'currentCount', 'status', 'notes', 'targetWeight', 'targetAgeWeeks', 'purchaseCostPerBird', 'currency'];
    const updates = [];
    const vals = [userId, req.params.id];
    keys.forEach((k, i) => {
        if (d[k] !== undefined) {
            vals.push(d[k]);
            updates.push(`${fields[i]} = $${vals.length}`);
        }
    });
    if (!updates.length)
        return res.json({});
    const { rows } = await pool.query(`UPDATE batches SET ${updates.join(',')} WHERE user_id=$1 AND id=$2 RETURNING *`, vals);
    res.json(row2camel(rows[0] || {}));
});
router.delete('/batches/:id', async (req, res) => {
    const userId = await uid(req);
    await pool.query('DELETE FROM batches WHERE user_id=$1 AND id=$2', [userId, req.params.id]);
    res.json({ ok: true });
});
function crudCollection(path, table, insertFn, updateFn) {
    router.get(`/${path}`, async (req, res) => {
        const userId = await uid(req);
        const { rows } = await pool.query(`SELECT * FROM ${table} WHERE user_id = $1 ORDER BY created_at DESC`, [userId]);
        res.json(rows.map(row2camel));
    });
    router.post(`/${path}`, async (req, res) => {
        const userId = await uid(req);
        const d = req.body;
        const { cols, vals } = insertFn(d);
        const allCols = ['user_id', ...cols];
        const allVals = [userId, ...vals];
        const placeholders = allVals.map((_, i) => `$${i + 1}`).join(',');
        const { rows } = await pool.query(`INSERT INTO ${table} (${allCols.join(',')}) VALUES (${placeholders}) RETURNING *`, allVals);
        res.json(row2camel(rows[0]));
    });
    router.patch(`/${path}/:id`, async (req, res) => {
        const userId = await uid(req);
        const d = req.body;
        if (!updateFn)
            return res.json({});
        const { fields, keys } = updateFn(d);
        const updates = [];
        const vals = [userId, req.params.id];
        keys.forEach((k, i) => {
            if (d[k] !== undefined) {
                vals.push(d[k]);
                updates.push(`${fields[i]} = $${vals.length}`);
            }
        });
        if (!updates.length)
            return res.json({});
        const { rows } = await pool.query(`UPDATE ${table} SET ${updates.join(',')} WHERE user_id=$1 AND id=$2 RETURNING *`, vals);
        res.json(row2camel(rows[0] || {}));
    });
    router.delete(`/${path}/:id`, async (req, res) => {
        const userId = await uid(req);
        await pool.query(`DELETE FROM ${table} WHERE user_id=$1 AND id=$2`, [userId, req.params.id]);
        res.json({ ok: true });
    });
}
crudCollection('eggs', 'eggs', d => ({ cols: ['batch_id', 'date', 'total_eggs', 'grade_a', 'grade_b', 'broken', 'notes'], vals: [d.batchId, d.date, d.totalEggs, d.gradeA, d.gradeB, d.broken, d.notes] }), d => ({ fields: ['batch_id', 'date', 'total_eggs', 'grade_a', 'grade_b', 'broken', 'notes'], keys: ['batchId', 'date', 'totalEggs', 'gradeA', 'gradeB', 'broken', 'notes'] }));
crudCollection('expenses', 'expenses', d => ({ cols: ['batch_id', 'category', 'amount', 'date', 'description'], vals: [d.batchId, d.category, d.amount, d.date, d.description] }), d => ({ fields: ['batch_id', 'category', 'amount', 'date', 'description'], keys: ['batchId', 'category', 'amount', 'date', 'description'] }));
crudCollection('revenue', 'revenue', d => ({ cols: ['batch_id', 'type', 'quantity', 'unit_price', 'amount', 'date', 'notes'], vals: [d.batchId, d.type, d.quantity, d.unitPrice, d.amount, d.date, d.notes] }), d => ({ fields: ['batch_id', 'type', 'quantity', 'unit_price', 'amount', 'date', 'notes'], keys: ['batchId', 'type', 'quantity', 'unitPrice', 'amount', 'date', 'notes'] }));
crudCollection('mortality', 'mortality', d => ({ cols: ['batch_id', 'count', 'cause', 'date', 'notes'], vals: [d.batchId, d.count, d.cause, d.date, d.notes] }));
crudCollection('weights', 'weights', d => ({ cols: ['batch_id', 'date', 'sample_size', 'average_weight', 'min_weight', 'max_weight', 'notes'], vals: [d.batchId, d.date, d.sampleSize, d.averageWeight, d.minWeight, d.maxWeight, d.notes] }));
crudCollection('environment', 'environment_logs', d => ({ cols: ['batch_id', 'date', 'time', 'temperature', 'humidity', 'ammonia', 'light_hours', 'ventilation', 'notes'], vals: [d.batchId, d.date, d.time, d.temperature, d.humidity, d.ammonia, d.lightHours, d.ventilation, d.notes] }));
crudCollection('health', 'health_records', d => ({ cols: ['batch_id', 'date', 'type', 'description', 'product', 'dosage', 'vet', 'next_due'], vals: [d.batchId, d.date, d.type, d.description, d.product, d.dosage, d.vet, d.nextDue] }), d => ({ fields: ['batch_id', 'date', 'type', 'description', 'product', 'dosage', 'vet', 'next_due'], keys: ['batchId', 'date', 'type', 'description', 'product', 'dosage', 'vet', 'nextDue'] }));
crudCollection('feedstock', 'feed_stock', d => ({ cols: ['batch_id', 'date', 'quantity_kg', 'duration_days', 'feed_type', 'notes'], vals: [d.batchId, d.date, d.quantityKg, d.durationDays, d.feedType, d.notes] }));
router.get('/activity', async (req, res) => {
    const userId = await uid(req);
    const { rows } = await pool.query('SELECT * FROM activity_log WHERE user_id = $1 ORDER BY timestamp DESC LIMIT 300', [userId]);
    res.json(rows.map(row2camel));
});
router.post('/activity', async (req, res) => {
    const userId = await uid(req);
    const d = req.body;
    const { rows } = await pool.query(`INSERT INTO activity_log (user_id, category, batch_id, batch_name, description, timestamp, date, user_name, user_email, user_photo)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`, [userId, d.category, d.batchId, d.batchName, d.description, d.timestamp, d.date, d.userName, d.userEmail, d.userPhoto]);
    res.json(row2camel(rows[0]));
});
router.get('/settings', async (req, res) => {
    const userId = await uid(req);
    const { rows } = await pool.query('SELECT * FROM settings WHERE user_id = $1', [userId]);
    if (!rows.length) {
        return res.json({ currency: 'ZiG', currencySymbol: 'ZiG', weightUnit: 'kg', temperatureUnit: 'C', darkMode: true });
    }
    res.json(row2camel(rows[0]));
});
router.post('/settings', async (req, res) => {
    const userId = await uid(req);
    const d = req.body;
    const { rows } = await pool.query(`INSERT INTO settings (user_id, currency, currency_symbol, weight_unit, temperature_unit, dark_mode)
     VALUES ($1,$2,$3,$4,$5,$6)
     ON CONFLICT (user_id) DO UPDATE SET currency=$2, currency_symbol=$3, weight_unit=$4, temperature_unit=$5, dark_mode=$6, updated_at=NOW()
     RETURNING *`, [userId, d.currency, d.currencySymbol, d.weightUnit, d.temperatureUnit, d.darkMode]);
    res.json(row2camel(rows[0]));
});
router.get('/notification-prefs', async (req, res) => {
    const userId = await uid(req);
    const { rows } = await pool.query('SELECT * FROM notification_prefs WHERE user_id = $1', [userId]);
    if (!rows.length) {
        return res.json({ eggReminderEnabled: false, eggReminderHour: 18, healthAlertEnabled: false, healthAlertDaysAhead: 1, mortalityAlertEnabled: false, mortalityAlertThreshold: 3, feedLowAlertEnabled: false, feedLowAlertDaysAhead: 2, feedRateAlertEnabled: false });
    }
    res.json(row2camel(rows[0]));
});
router.post('/notification-prefs', async (req, res) => {
    const userId = await uid(req);
    const d = req.body;
    const { rows } = await pool.query(`INSERT INTO notification_prefs (user_id, egg_reminder_enabled, egg_reminder_hour, health_alert_enabled, health_alert_days_ahead, mortality_alert_enabled, mortality_alert_threshold, feed_low_alert_enabled, feed_low_alert_days_ahead, feed_rate_alert_enabled)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
     ON CONFLICT (user_id) DO UPDATE SET egg_reminder_enabled=$2, egg_reminder_hour=$3, health_alert_enabled=$4, health_alert_days_ahead=$5, mortality_alert_enabled=$6, mortality_alert_threshold=$7, feed_low_alert_enabled=$8, feed_low_alert_days_ahead=$9, feed_rate_alert_enabled=$10, updated_at=NOW()
     RETURNING *`, [userId, d.eggReminderEnabled, d.eggReminderHour, d.healthAlertEnabled, d.healthAlertDaysAhead, d.mortalityAlertEnabled, d.mortalityAlertThreshold, d.feedLowAlertEnabled, d.feedLowAlertDaysAhead, d.feedRateAlertEnabled]);
    res.json(row2camel(rows[0]));
});
export default router;
