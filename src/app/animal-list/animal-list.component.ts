import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  // @Output() clickPour = new EventEmitter();
  filterByAnimalAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
   this.filterByAnimalAge = optionFromMenu;
 }

 // toggleDone(clickedKeg: Animal, setAlcohol: number) {
 //   clickedKeg.alcoholContent = setAlcohol;
 // }

  constructor() { }

  ngOnInit() {
  }

}
