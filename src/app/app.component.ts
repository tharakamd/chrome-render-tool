import {Component} from '@angular/core';
import {animals, colors, Config, uniqueNamesGenerator} from 'unique-names-generator';
import {Animal} from './animal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public animalsArray: Animal[] = [];
  private customConfig: Config = {
    dictionaries: [colors, animals],
    separator: ' ',
    length: 2,
  };

  constructor() {
    for (let i = 0; i < 13; i++) {
      this.addNewAnimal();
    }
  }

  addNewAnimal() {

    const tmpArray: Animal[] = [];
    for (const animal of this.animalsArray) {
      tmpArray.push(new Animal(animal.name));
    }
    const animalName: string = uniqueNamesGenerator(this.customConfig);

    tmpArray.push(new Animal(animalName));
    this.animalsArray = [];
    this.animalsArray = tmpArray;
  }

  trackAnimal(animalInstance: Animal) {
    return animalInstance.name;
  }

}
