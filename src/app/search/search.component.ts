import { Component, Output , OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  // create an event for when you add the search .
  @Output() onItemSearch = new EventEmitter<string>();

  searchResult: any[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  
  handleSearch() {
    // const searchResult = [];

    const searchFor = this.searchText;
    console.log(searchFor)
    this.onItemSearch.emit(searchFor);

    this.http.get("https://www.googleapis.com/books/v1/volumes?q=inauthor=tolkien").toPromise().then((response: GoogleBooksResponse) => {
      this.searchResult = response.items;
      console.log(this.searchResult)
    });
  }

  }

