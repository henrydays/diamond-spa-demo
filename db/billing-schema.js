// Database Schema for Team Billing Feature
const BILLING_SCHEMA = {
  tables: {
    team_subscriptions: { id: 'INTEGER PRIMARY KEY', team_id: 'INTEGER NOT NULL', plan_id: 'INTEGER NOT NULL' },
    billing_plans: { id: 'INTEGER PRIMARY KEY', name: 'TEXT NOT NULL', price_monthly: 'DECIMAL(10,2)' },
    invoices: { id: 'INTEGER PRIMARY KEY', subscription_id: 'INTEGER NOT NULL', amount: 'DECIMAL(10,2)' }
  }
};
export function migrate() { console.log('Running billing migration...'); return BILLING_SCHEMA; }
export default BILLING_SCHEMA;
