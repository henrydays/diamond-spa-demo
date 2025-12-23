// Permissions and Audit Logging for Team Billing
// Ensures only team admins can manage billing

export const BILLING_PERMISSIONS = {
  VIEW_PLANS: 'billing:plans:view',
  SUBSCRIBE: 'billing:subscribe',
  VIEW_INVOICES: 'billing:invoices:view',
  MANAGE_BILLING: 'billing:manage'
};

export function requireBillingPermission(permission) {
  return (req, res, next) => {
    if (!req.user.permissions.includes(permission)) {
      auditLog('PERMISSION_DENIED', { user: req.user.id, permission });
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

export function auditLog(action, data) {
  const entry = {
    timestamp: new Date().toISOString(),
    action,
    data,
    source: 'team-billing'
  };
  console.log('[AUDIT]', JSON.stringify(entry));
  // In production: send to audit service
}

export function billingAuditMiddleware(req, res, next) {
  const originalSend = res.send;
  res.send = function(body) {
    auditLog('BILLING_REQUEST', {
      method: req.method,
      path: req.path,
      user: req.user?.id,
      status: res.statusCode
    });
    originalSend.call(this, body);
  };
  next();
}
