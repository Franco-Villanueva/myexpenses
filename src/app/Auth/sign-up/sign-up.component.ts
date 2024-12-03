import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export default class SignUpComponent {
  userForm: FormGroup;
  name: FormControl;
  correo: FormControl;
  password: FormControl;

  constructor() {
    this.name = new FormControl('');
    this.correo = new FormControl('');
    this.password = new FormControl('');

    this.userForm = new FormGroup({
      name: this.name,
      correo: this.correo,
      password: this.password
      
    })
  }
  
  handlerSubmit():void {
    console.log(this.userForm.value)
  }
}