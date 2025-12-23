// Backend API for Team Billing
// Feature flagged - only enabled for beta users

const FEATURE_FLAG = 'team_billing_beta';

export const billingRoutes = {
  'GET /api/billing/plans': async (req, res) => {
    if (!req.user.features.includes(FEATURE_FLAG)) {
      return res.status(403).json({ error: 'Feature not enabled' });
    }
    const plans = await db.query('SELECT * FROM billing_plans');
    return res.json(plans);
  },
  
  'POST /api/billing/subscribe': async (req, res) => {
    const { team_id, plan_id } = req.body;
    const subscription = await db.insert('team_subscriptions', { team_id, plan_id });
    return res.json(subscription);
  },
  
  'GET /api/billing/invoices/:teamId': async (req, res) => {
    const invoices = await db.query('SELECT * FROM invoices WHERE team_id = ?', [req.params.teamId]);
    return res.json(invoices);
  }
};

export default billingRoutes;
