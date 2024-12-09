import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { MenuComponent } from "./Components/menu/menu.component";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MenuComponent, NgxSonnerToaster],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyExpense';

  router: string = ''; // Variable para almacenar la ruta actual

  constructor(private _router: Router) {}

  ngOnInit() {
    // Escuchar eventos de navegación para obtener la ruta actual
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router = event.urlAfterRedirects; // Actualiza la ruta actual
      }
    });
  }
}
