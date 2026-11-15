import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { injectSiteSettings } from './site-settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="site-nav">
      <a routerLink="/" class="brand">{{ settings?.title ?? 'My Blog' }}</a>
      <a routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <main>
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: block;
      max-width: 860px;
      margin: 0 auto;
      padding: 1.5rem;
      font-family: system-ui, sans-serif;
    }
    .site-nav {
      display: flex;
      gap: 1rem;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 2rem;
    }
    .brand {
      font-weight: 700;
      margin-right: auto;
    }
    a {
      color: #1a56db;
      text-decoration: none;
    }
    a.active {
      font-weight: 600;
      text-decoration: underline;
    }
  `,
})
export class App {
  readonly settings = injectSiteSettings();
}
