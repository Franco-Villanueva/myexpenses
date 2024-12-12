import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthStateService } from '../Shared/data-access/auth-state.service';
import { map } from 'rxjs';

export const privateGuard: CanActivateFn = () => {

  const _authState = inject(AuthStateService);
  const router = inject(Router);

  return _authState.authState$.pipe(
    map((state) => {
      console.log(state)
      if (!state) {
        router.navigate(['/auth/sign-in']);
        return false;
      } else {
        return true;
      }
    })
  );

};

export const publicGuard: CanActivateFn = () => {
  const _authState = inject(AuthStateService);
  const router = inject(Router);

  return _authState.authState$.pipe(
    map((state) => {
      console.log(state)
      if (state) {
        router.navigate(['dashboard/home']);
        return false;
      } else {
        return true;
      }
    })
  );  
};
