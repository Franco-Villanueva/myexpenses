import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToggleComponent } from '../Buttons/toggle/toggle.component';
import { LogInComponent } from "../Buttons/log-in/log-in.component";
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleComponent, LogInComponent, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'navbar'

  // async submitWithGoogle () {
  //   try {
  //     await this._authService.signInWithGoogle();

  //     this._router.navigate(['dashboard/home']);

  //     toast.success('Usuario creado correctamente')
  //   } catch (error) {
  //     console.log(error)
  //     toast.error('Ocurrio un error') 
  //   }
  // }
}
