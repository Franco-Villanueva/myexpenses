import { inject, Injectable } from '@angular/core';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _auth = inject(Auth);

  get authState$(): Observable<any> {
    return authState(this._auth);
  }

  // Cerrar sesión
  async signOut() {
    try {
      await signOut(this._auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}
