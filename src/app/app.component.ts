import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo!';

  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'Bob', 3, 'People', 'Woods', 9, 'Male', 'Food', 'You', 'Long story', '07/12/2012'),
    new Animal('Whale', 'Moby', 24, 'Sailors', 'Toilet', 1, 'Male', 'Swimming', 'Land', 'Theres a book about this', '08/03/1864'),
    new Animal('Unicorn', 'Cindy', 4, 'Children', 'Petting area', 4, 'Female', 'Running', 'TV', 'Dont ask', '04/04/2016')

  ];

 //  editAnimal(clickedAnimal){
 //   this.selectedAnimal = clickedAnimal;
 // }

 // finishedEditing(){
 //   this.selectedAnimal = null;
 // }

 addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);

 }
}
