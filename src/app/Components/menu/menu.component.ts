import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],  
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menu: any[] = [
    { value: 'home', viewValue: 'Dashboard' },
    { value: 'tables', viewValue: 'Table' },
    { value: 'settings', viewValue: 'Setting' },
  ];
}
