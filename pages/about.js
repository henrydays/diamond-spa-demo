// About Page
export function renderAbout() {
    return `
        <section class="page about-page">
            <h1>About Diamond SPA</h1>
            <div class="about-grid">
                <div class="about-card">
                    <h3>🔗 Stacked PRs</h3>
                    <p>Each feature builds on the previous one, creating a clear dependency chain that makes reviewing code logical and sequential.</p>
                </div>
                <div class="about-card">
                    <h3>🚀 Faster Reviews</h3>
                    <p>Small, focused PRs are easier to review than massive changes. Diamond helps break down large features into digestible pieces.</p>
                </div>
                <div class="about-card">
                    <h3>🛡️ Safer Merges</h3>
                    <p>The merge queue ensures PRs are merged in the correct order, preventing conflicts and maintaining code integrity.</p>
                </div>
                <div class="about-card">
                    <h3>📊 Visual Tracking</h3>
                    <p>See your entire stack at a glance. Track CI status, review state, and merge progress in one beautiful dashboard.</p>
                </div>
            </div>
        </section>
    `;
}

