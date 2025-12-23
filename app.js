// Diamond SPA Demo - Main App
// This is a simple vanilla JS SPA

import { renderNavigation } from './components/navigation.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './pages/about.js';

class Router {
    constructor(routes) {
        this.routes = routes;
        window.addEventListener('hashchange', () => this.navigate());
        window.addEventListener('load', () => this.navigate());
    }

    navigate() {
        const hash = window.location.hash.slice(1) || '/';
        const route = this.routes[hash] || this.routes['/404'];
        document.getElementById('content').innerHTML = route();
    }
}

// Routes
const routes = {
    '/': () => renderHero(),
    '/about': () => renderAbout(),
    '/features': () => `
        <section class="page">
            <h1>Features</h1>
            <p>Coming in PR #3...</p>
        </section>
    `,
    '/contact': () => `
        <section class="page">
            <h1>Contact</h1>
            <p>Coming in PR #3...</p>
        </section>
    `,
    '/404': () => `
        <section class="error">
            <h1>404 - Page Not Found</h1>
            <a href="#/">Go Home</a>
        </section>
    `
};

// Initialize
renderNavigation();
const router = new Router(routes);
console.log('Diamond SPA initialized');

