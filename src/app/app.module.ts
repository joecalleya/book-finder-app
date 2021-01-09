import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooklistComponent } from './booklist/booklist.component';
import { AngularFireModule } from '@angular/fire';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const firebaseConfig = {
  apiKey: "AIzaSyCj8pfX51yh3PYgb5V2G6Zg3XdD9qox4jA",
  authDomain: "book-finder-app-b2cc3.firebaseapp.com",
  databaseURL: "https://book-finder-app-b2cc3.firebaseio.com",
  projectId: "book-finder-app-b2cc3",
  storageBucket: "book-finder-app-b2cc3.appspot.com",
  messagingSenderId: "30704442274",
  appId: "1:30704442274:web:297cd3a0790fd0b8d270fb"
};

const routes: Routes = [
  {path: '', component: SearchComponent},
];

@NgModule({
  declarations: [
    AppComponent
    ,SearchComponent
    , BooklistComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
    ,BrowserModule
    ,AppRoutingModule
    ,RouterModule.forRoot(routes)
    ,HttpClientModule
    ,FormsModule
    , FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
