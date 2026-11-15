import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';

import { PostAttributes } from '../post.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  template: `
    <header class="hero">
      <h1>My AnalogJS Blog</h1>
      <p>Posts about Angular, AnalogJS and web dev.</p>
    </header>

    <ul class="post-list">
      @for (post of posts; track post.attributes.slug) {
        <li class="post-card">
          <a [routerLink]="['/blog', post.attributes.slug]">
            <img [src]="post.attributes.coverImage" [alt]="post.attributes.title" />
            <div class="post-card-body">
              <h2>{{ post.attributes.title }}</h2>
              <p class="meta">
                <time>{{ post.attributes.publishedAt | date: 'mediumDate' }}</time>
              </p>
              <p>{{ post.attributes.description }}</p>
              <ul class="tags">
                @for (tag of post.attributes.tags; track tag) {
                  <li>#{{ tag }}</li>
                }
              </ul>
            </div>
          </a>
        </li>
      } @empty {
        <li>No posts yet.</li>
      }
    </ul>
  `,
})
export default class HomePage {
  readonly posts = injectContentFiles<PostAttributes>((file) =>
    file.filename.includes('src/content/blog/'),
  ).sort(
    (a, b) =>
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime(),
  );
}
