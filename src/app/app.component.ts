import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zoo!';

  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Tiger', 'Bob', 3, 'People', 'Woods', 9, 'Male', 'Food', 'You', 'Long story', '07/12/2012', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITGWM2TvU4VQUxirPznqnexI7QeS1-mtHepp9HDKIiAlqUNJT'),
    new Animal('Whale', 'Moby', 24, 'Sailors', 'Toilet', 1, 'Male', 'Swimming', 'Land', 'Theres a book about this', '08/03/1864', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWhOhybRpImPx7kAs80ij0fiMVqhrNVXdjHeLxGOJq8W5ZIzodQ'),
    new Animal('Unicorn', 'Cindy', 4, 'Children', 'Petting area', 4, 'Female', 'Running', 'TV', 'Dont ask', '04/04/2016', 'https://i.ytimg.com/vi/s-NxWpBjzh0/hqdefault.jpg'),
    new Animal('Shark', 'Sam', 1, 'Swimmers', 'Public Pool', 4, 'Male', 'Sleeping', 'Gym', 'I saw a movie about this once', '04/09/2015', 'http://sharkopedia.discovery.com/wp-content/uploads/2015/06/shark-intelligence-2a-550x350.jpg')

  ];

  editAnimal(clickedAnimal){
   this.selectedAnimal = clickedAnimal;
 }

 finishedEditing(){
   this.selectedAnimal = null;
 }

 addAnimal(newAnimalFromChild: Animal) {
   this.masterAnimalList.push(newAnimalFromChild);
 }

}
