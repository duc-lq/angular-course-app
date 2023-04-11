import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { test } from '@app/test';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { getFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

const app = initializeApp(environment.firebase.config);
const db = getFirestore(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'course-app';

  ngOnInit(): void {
    console.log('db: ', db);
  }

}
