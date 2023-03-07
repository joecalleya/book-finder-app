import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

interface GoogleBooksResponse {
  items: any[];
  kind: string;
  totalItems: number;
}

@Injectable({
  providedIn: 'root'
  })

export class DataFetchService {
  searchResult: any[];
  
  searchText: string;

  // create an event for when you add the search .
  @Output() onItemSearch = new EventEmitter<string>();

  constructor(private http: HttpClient) { }
  
  handleAPISearch(searchText): Observable<GoogleBooksResponse> {

    return this.http.get<GoogleBooksResponse>
    (`https://www.googleapis.com/books/v1/volumes?q=inauthor=${searchText}`)
  }
}