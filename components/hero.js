// Hero Component
export function renderHero() {
    return `
        <section class="hero">
            <div class="hero-content">
                <span class="hero-badge">Built with Diamond</span>
                <h1 class="hero-title">
                    Ship code in <span class="gradient">stacks</span>
                    <br>not chaos
                </h1>
                <p class="hero-description">
                    This demo SPA was built using stacked pull requests. 
                    Each feature branch builds on the previous one, making 
                    code review easier and merges safer.
                </p>
                <div class="hero-actions">
                    <a href="#/features" class="btn btn-primary">View Features</a>
                    <a href="#/about" class="btn btn-secondary">Learn More</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="stack-demo">
                    <div class="stack-item merged">◇ PR #1 - Navigation</div>
                    <div class="stack-item current">◇ PR #2 - Hero & About</div>
                    <div class="stack-item pending">◇ PR #3 - Footer & Contact</div>
                </div>
            </div>
        </section>
    `;
}

