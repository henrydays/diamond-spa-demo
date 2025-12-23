// Navigation Component
export function renderNavigation() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="nav-container">
            <a href="#/" class="logo">
                <span class="diamond">◇</span> Diamond SPA
            </a>
            <ul class="nav-links">
                <li><a href="#/">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/features">Features</a></li>
                <li><a href="#/contact">Contact</a></li>
            </ul>
        </div>
    `;
}

