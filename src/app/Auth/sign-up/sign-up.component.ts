import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {

  fb = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    name: [
      '', 
      [
        Validators.required, 
        Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:[\\s-][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}$')
      ]
    ],
    correo: [
      '', 
      [
        Validators.required, 
        Validators.email
      ]
    ],
    password: [
      '', 
      [
        Validators.required, 
        Validators.minLength(8)
      ]
    ],
    password2: [
      '', 
      [
        Validators.required
      ]
    ]
  }, { validator: this.passwordMatchValidator });

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const password2 = group.get('password2')?.value;
    return password === password2 ? null : { notMatching: true };
  }

  onSubmit():void {
    console.log('Form Submitted ->>>',this.form.value)
  }

}