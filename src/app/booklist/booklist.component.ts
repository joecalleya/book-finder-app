import { Input, Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
  
})
export class BooklistComponent implements OnInit {

  @Input() searchResult : object[];

  faSave = faSave;


  constructor() { }

  ngOnInit(): void {
  }

}
