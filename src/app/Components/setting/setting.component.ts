import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LogoutButtonComponent } from "../Buttons/logout-button/logout-button.component";
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';
import { AuthStateService } from '../../Shared/data-access/auth-state.service';


@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [LogoutButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export default class SettingComponent {

  private _authState = inject(AuthStateService);
  _router = inject(Router);

  async logOut () {
    try {
      await this._authState.signOut();
      this._router.navigate(['/auth/sign-in']);
      toast.success('Se cerro la sesion')
    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error') 
    }
  }
}
