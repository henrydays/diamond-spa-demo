// Contact Page
export function renderContact() {
    return `
        <section class="page contact-page">
            <h1>Get in Touch</h1>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Interested in using Diamond for your team? Have questions about stacked PRs? We'd love to hear from you.</p>
                    <div class="contact-methods">
                        <div class="contact-method">
                            <span>📧</span>
                            <span>hello@diamond.dev</span>
                        </div>
                        <div class="contact-method">
                            <span>🐙</span>
                            <span>github.com/diamond</span>
                        </div>
                        <div class="contact-method">
                            <span>💬</span>
                            <span>discord.gg/diamond</span>
                        </div>
                    </div>
                </div>
                <form class="contact-form" onsubmit="event.preventDefault(); alert('Form submitted!')">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="How can we help?" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    `;
}

