import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../data-acess/auth.service';
import { toast } from 'ngx-sonner';
import { GoogleButtonComponent } from '../ui/google-button/google-button.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, GoogleButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export default class SignUpComponent {
  _formBuilder = inject(FormBuilder);
  _authService = inject(AuthService);
  _router = inject(Router);

  form: FormGroup = this._formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required]],
    },
    { validator: this.passwordMatchValidator }
  );

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const password2 = group.get('password2')?.value;
    return password === password2 ? null : { notMatching: true };
  }

  async onSubmit() {
    if(this.form.invalid) return;

    try {

      const { email, password } = this.form.value;

      await this._authService.signUp({ email, password });

      this._router.navigate(['dashboard/home']);

      toast.success('Usuario creado correctamente')

    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error')
    }

  }

  async submitWithGoogle () {
    try {
      await this._authService.signInWithGoogle();

      this._router.navigate(['dashboard/home']);

      toast.success('Usuario creado correctamente')
    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error') 
    }
  }

}
