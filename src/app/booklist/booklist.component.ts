import { Input, Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']

})
export class BooklistComponent implements OnInit {

  @Input() searchResult: object[];

  faSave = faSave;
  isSaved: boolean;
  savedBooks: any[];

  constructor(private firestore: AngularFirestore) { }

  getSaved () {
    this.firestore.collection('savedBooks').get().toPromise().then(response=>{
    this.savedBooks = response.docs.map(d => d.data())})
    console.log("Saved", this.savedBooks)
}
  ngOnInit(): void {
    this.getSaved()
  }
  
  handleSave(item) {

    this.firestore.collection('savedBooks').add(item)
}


}