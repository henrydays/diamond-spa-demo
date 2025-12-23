// Backend API for Team Billing - GA Release
// Feature flag removed - available to all users

export const billingRoutes = {
  'GET /api/billing/plans': async (req, res) => {
    trackMetric('plans_viewed');
    const plans = await db.query('SELECT * FROM billing_plans');
    return res.json(plans);
  },
  
  'POST /api/billing/subscribe': async (req, res) => {
    const { team_id, plan_id } = req.body;
    trackMetric('subscriptions_created');
    const subscription = await db.insert('team_subscriptions', { team_id, plan_id });
    return res.json(subscription);
  },
  
  'GET /api/billing/invoices/:teamId': async (req, res) => {
    const invoices = await db.query('SELECT * FROM invoices WHERE team_id = ?', [req.params.teamId]);
    return res.json(invoices);
  },
  
  'POST /api/billing/webhook': async (req, res) => {
    // Payment provider webhook handler
    const { event, data } = req.body;
    console.log('[WEBHOOK]', event, data);
    return res.json({ received: true });
  }
};

import { trackMetric } from '../utils/billing-monitoring.js';
export default billingRoutes;
