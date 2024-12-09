import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User as FirebaseUser  } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = inject(Auth);

  // BehaviorSubject para gestionar el estado del usuario
  private _authState = new BehaviorSubject<FirebaseUser | null>(null); // Almacena el usuario o null

  constructor() {
    // Escuchar cambios en el estado de autenticación
    onAuthStateChanged(this._auth, (user) => {
      this._authState.next(user);
    });
  }

  // Método para obtener el usuario actual
  getCurrentUser() {
    return this._authState.getValue();
  }

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
    return signInWithPopup(this._auth, googleProvider);
  }

  // Cerrar sesión
  async signOut() {
    try {
      await this._auth.signOut();
      this._authState.next(null); // Limpia el estado del usuario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }

}
