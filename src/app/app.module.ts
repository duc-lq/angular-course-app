import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'environments/environment';
import { HeaderComponent } from './components/header/header.component';

// Firebase
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';

// import { provideFirebaseApp, getApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
    //provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    //provideFirestore(() => getFirestore())

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
