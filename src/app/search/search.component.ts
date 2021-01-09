import { Component, Output , OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// item 4. Make the search to look more like googles style

import { faSearch } from '@fortawesome/free-solid-svg-icons';

// 8. Create an interface for the response - Strongly type the response, changed to object instead of any

interface GoogleBooksResponse {

  items: object[];
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  searchResult: object[];
  faSearch = faSearch;

  // create an event for when you add the search .
  @Output() onItemSearch = new EventEmitter<string>();


  constructor(private http: HttpClient,
              ) {}

  ngOnInit(): void {

  }
  
  handleSearch() {

    const searchFor = this.searchText;
    this.onItemSearch.emit(searchFor);

    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor=${searchFor}`).toPromise().then((response: GoogleBooksResponse) => {
      this.searchResult = response.items;
      
      console.log("returned", (this.searchResult))

    });
  }

  }

