import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"myexpense00",
        "appId":"1:905751798264:web:0bcbaf2ba0574606ce360d",
        "storageBucket":"myexpense00.firebasestorage.app",
        "apiKey":"AIzaSyBm1nI2pQ8x1z80YMaGyzFaYgeDbHE44MU",
        "authDomain":"myexpense00.firebaseapp.com",
        "messagingSenderId":"905751798264"
      })), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())]
};
