import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    // Creamos el formulario reactivo con los campos y validaciones
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern('[0-9]{10}')],
    });
  }
  // Aquí irían los métodos para manejar el envío del formulario y las validaciones
}