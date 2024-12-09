import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LogoutButtonComponent } from "../shared/logout-button/logout-button.component";
import { AuthService } from '../../Auth/data-acess/auth.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [LogoutButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  _authService = inject(AuthService);
  _router = inject(Router);

  async logOut () {
    try {
      await this._authService.signOut();

      this._router.navigate(['/auth/sign-in']);

      toast.success('Se cerro la sesion')
    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error') 
    }
  }
}
