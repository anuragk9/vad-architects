import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CursorComponent } from './shared/components/cursor/cursor.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CursorComponent, LoaderComponent],
  template: `
    <app-loader />
    <app-cursor />
    <app-navbar />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent {}