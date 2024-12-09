import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../Auth/data-acess/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  const user = _authService.getCurrentUser();

  if (user) {
    return true; // Permite el acceso si el usuario está autenticado
  } else {
    router.navigate(['/auth/sign-in']); // Redirige al usuario al módulo de autenticación
    return false; // Bloquea el acceso a la ruta
  }
};