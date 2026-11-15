import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <h1>About</h1>
    <p>A blog built from scratch with the latest AnalogJS and Angular. xxx</p>
    <a routerLink="/">Back to posts</a>
  `,
})
export default class AboutPage {}
