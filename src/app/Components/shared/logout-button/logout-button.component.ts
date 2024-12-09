import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [],
  templateUrl: './logout-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './logout-button.component.css'
})
export class LogoutButtonComponent {

  onClick = output<void>();

}
