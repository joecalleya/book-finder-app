import { Component, Output , OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataFetchService } from '../data-fetch.service';
import { CONTENT_ATTR } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string;
  searchResult: any[];

  // create an event for when you add the search .
  @Output() onItemSearch = new EventEmitter<string>();


  constructor(private http: HttpClient,
              private dataFetchService: DataFetchService
              ) {}

  ngOnInit(): void {

  }
  DataFetchService: DataFetchService[] = [];

  handleSearch(){
    const searchFor = this.searchText;
    this.onItemSearch.emit(searchFor);
    this.dataFetchService.handleAPISearch(searchFor)
    .subscribe(data => {
     this.searchResult = data.items
     console.log("returned", this.searchResult)
     return this.searchResult
     });
    return this.searchResult
  }
} 