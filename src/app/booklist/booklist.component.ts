import { Input, Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

 
//item 8. Create an interface for the response - Strongly type the response -On this issue ,can you make the items property typed instead of any[] and set said type in the booklist component which currently doesn’t know the structure of the searchResult input other than object[].

interface searchResult {

  accessInfo: object;
  etag: string;
  id: string;
  kind: string;
  saleInfo: object;
  searchInfo: object;
  selfLink: string;
  volumeInfo: string;
}

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']

})
export class BooklistComponent implements OnInit {

  @Input() searchResult: searchResult;

  faBook = faBook;
  isSaved: boolean;
  savedBooks: any[];

  constructor(private firestore: AngularFirestore) { }

  getSaved () {
    this.firestore.collection('savedBooks').get().toPromise().then(response=>{
    this.savedBooks = response.docs.map(d => d.data())})
}
  ngOnInit(): void {
    this.getSaved()
  }
  
  handleSave(item) {

    this.firestore.collection('savedBooks').add(item)
}
}