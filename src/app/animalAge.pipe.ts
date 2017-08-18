import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model'


@Pipe({
  name: "animalAge",
  pure: false
})

export class AnimalAgePipe implements PipeTransform {

  transform(input: Animal[], creatureAge) {
    var output: Animal[] = [];
    if (creatureAge === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].animalAge <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (creatureAge === "old") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].animalAge >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
