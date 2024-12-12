import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = inject(Auth);

  // Registrar un usuario con correo y contraseña
  async signUp(user: User) {
    try {
      return await createUserWithEmailAndPassword(
        this._auth,
        user.email,
        user.password
      );
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  }

  // Iniciar sesión con Google
  signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    // googleProvider.setCustomParameters({prompt : 'select_account'}) para que no tome la cuenta que ya se inicio sesion por default
    return signInWithPopup(this._auth, googleProvider);
  }

  // Cerrar sesión

}
