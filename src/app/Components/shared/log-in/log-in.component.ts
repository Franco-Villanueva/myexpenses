import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  onClick = output<void>();

}
