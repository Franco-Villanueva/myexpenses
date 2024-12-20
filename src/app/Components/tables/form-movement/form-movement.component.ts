import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-movement',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './form-movement.component.html',
  styleUrl: './form-movement.component.css'
})
export class FormMovementComponent {
  isOpen = false

  handlerClick() {
    this.isOpen = true;
  }

}
