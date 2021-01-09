import { Input, Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']

})
export class BooklistComponent implements OnInit {

  @Input() searchResult: object[];

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