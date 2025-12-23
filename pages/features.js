// Features Page
export function renderFeatures() {
    return `
        <section class="page features-page">
            <h1>Features</h1>
            <p class="features-intro">Everything you need to manage stacked pull requests effectively.</p>
            
            <div class="features-list">
                <div class="feature-item">
                    <div class="feature-icon">📚</div>
                    <div class="feature-content">
                        <h3>Stack Management</h3>
                        <p>Create, reorder, and manage stacks of dependent pull requests with ease. Visual stack view shows dependencies at a glance.</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">🔄</div>
                    <div class="feature-content">
                        <h3>Auto Sync</h3>
                        <p>Automatically sync your stack when the base branch changes. No more manual rebasing across multiple branches.</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">🚦</div>
                    <div class="feature-content">
                        <h3>Merge Queue</h3>
                        <p>Intelligent merge queue ensures PRs are merged in the correct order, respecting dependencies.</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-content">
                        <h3>CLI Tools</h3>
                        <p>Powerful CLI for creating branches, submitting stacks, and managing PRs right from your terminal.</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">🎯</div>
                    <div class="feature-content">
                        <h3>CI Integration</h3>
                        <p>See CI status for every PR in your stack. Failed checks are highlighted for quick attention.</p>
                    </div>
                </div>
                
                <div class="feature-item">
                    <div class="feature-icon">👥</div>
                    <div class="feature-content">
                        <h3>Review Tracking</h3>
                        <p>Track review status across your entire stack. See who approved what at a glance.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

