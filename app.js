// Diamond SPA Demo - Main App
// This is a simple vanilla JS SPA

import { renderNavigation } from './components/navigation.js';

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
    '/': () => `
        <section class="hero">
            <h1>Welcome to Diamond SPA</h1>
            <p>A simple single-page application built with stacked PRs</p>
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

