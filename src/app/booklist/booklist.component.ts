import { Input, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  @Input() searchResult : object[];


  constructor() { }

  ngOnInit(): void {
  }

}
