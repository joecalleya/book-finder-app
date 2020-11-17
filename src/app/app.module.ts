import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes , RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {CollectionComponent} from "./collection/collection.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BooklistComponent } from './booklist/booklist.component';


const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'collection', component: CollectionComponent}
];

@NgModule({
  declarations: [
    AppComponent
    ,CollectionComponent
    ,SearchComponent, BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    ,HttpClientModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
