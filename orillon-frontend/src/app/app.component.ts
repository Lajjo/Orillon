import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/pokemon-library">Pokémon Library</a>
    </nav>
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'orillon-frontend';
}
