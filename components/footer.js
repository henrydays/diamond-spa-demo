// Footer Component
export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-brand">
                <span class="diamond">◇</span> Diamond SPA Demo
                <p>Built with stacked pull requests</p>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <h4>Navigation</h4>
                    <a href="#/">Home</a>
                    <a href="#/about">About</a>
                    <a href="#/features">Features</a>
                    <a href="#/contact">Contact</a>
                </div>
                <div class="footer-column">
                    <h4>Stack</h4>
                    <span>PR #1 - Navigation</span>
                    <span>PR #2 - Hero & About</span>
                    <span>PR #3 - Footer & Contact</span>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024 Diamond. Made with ♥ using stacked PRs.</p>
            </div>
        </div>
    `;
}

