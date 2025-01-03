import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-google-button',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './google-button.component.html',
  styleUrl: './google-button.component.css'
})
export class GoogleButtonComponent {

  onClick = output<void>();

}
