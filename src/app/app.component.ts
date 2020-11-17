import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-finder-app';


handleSearch(item: string) {
  // What should we do here when we need to handle the search
  
  console.log("Search")

}
}