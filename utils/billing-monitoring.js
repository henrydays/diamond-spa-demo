// Monitoring and Metrics for Team Billing
// Final cleanup - remove feature flags and enable for all users

export const BILLING_METRICS = {
  subscriptions_created: 0,
  plans_viewed: 0,
  invoices_generated: 0,
  payment_failures: 0
};

export function trackMetric(name, value = 1) {
  if (BILLING_METRICS[name] !== undefined) {
    BILLING_METRICS[name] += value;
  }
  // Send to monitoring service
  console.log('[METRIC]', name, value);
}

export function setupBillingMonitoring() {
  // Health check endpoint
  setInterval(() => {
    const health = {
      service: 'team-billing',
      status: 'healthy',
      metrics: BILLING_METRICS,
      timestamp: new Date().toISOString()
    };
    console.log('[HEALTH]', JSON.stringify(health));
  }, 60000);
}

// Alert configuration
export const BILLING_ALERTS = {
  payment_failure_threshold: 5,
  response_time_threshold: 2000,
  error_rate_threshold: 0.01
};

export function checkAlerts() {
  if (BILLING_METRICS.payment_failures > BILLING_ALERTS.payment_failure_threshold) {
    sendAlert('High payment failure rate detected');
  }
}

function sendAlert(message) {
  console.error('[ALERT]', message);
  // In production: send to PagerDuty/Slack
}
