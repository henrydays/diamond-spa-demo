// Frontend UI for Team Billing
// Feature flagged - shows upgrade prompt to eligible users

export function renderBillingPage() {
  return 
    <section class="billing-page">
      <header class="billing-header">
        <h1>Team Billing</h1>
        <p>Manage your team's subscription and billing</p>
      </header>
      
      <div class="plans-container">
        <div class="plan-card" data-plan="starter">
          <h2>Starter</h2>
          <div class="price">\/mo</div>
          <ul>
            <li>5 team members</li>
            <li>Basic features</li>
            <li>Email support</li>
          </ul>
          <button class="btn-subscribe">Select Plan</button>
        </div>
        
        <div class="plan-card featured" data-plan="pro">
          <div class="badge">Popular</div>
          <h2>Pro</h2>
          <div class="price">\/mo</div>
          <ul>
            <li>25 team members</li>
            <li>All features</li>
            <li>Priority support</li>
            <li>Analytics dashboard</li>
          </ul>
          <button class="btn-subscribe primary">Select Plan</button>
        </div>
        
        <div class="plan-card" data-plan="enterprise">
          <h2>Enterprise</h2>
          <div class="price">Contact Us</div>
          <ul>
            <li>Unlimited members</li>
            <li>Custom features</li>
            <li>Dedicated support</li>
            <li>SLA guarantee</li>
          </ul>
          <button class="btn-subscribe">Contact Sales</button>
        </div>
      </div>
      
      <section class="invoices-section">
        <h2>Billing History</h2>
        <div id="invoices-list"></div>
      </section>
    </section>
  ;
}

export function initBillingPage() {
  document.querySelectorAll('.btn-subscribe').forEach(btn => {
    btn.addEventListener('click', handleSubscribe);
  });
  loadInvoices();
}

async function handleSubscribe(e) {
  const plan = e.target.closest('.plan-card').dataset.plan;
  console.log('Subscribing to plan:', plan);
  // API call here
}

async function loadInvoices() {
  // Load invoice history
}
