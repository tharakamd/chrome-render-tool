import {Component} from '@angular/core';
import {animals, colors, Config, uniqueNamesGenerator} from 'unique-names-generator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public animalNames: string[] = [];
  private customConfig: Config = {
    dictionaries: [colors, animals],
    separator: ' ',
    length: 2,
  };

  constructor() {
    for (let i = 0; i < 15; i++) {
      this.addNewAnimal();
    }
  }

  addNewAnimal() {
    this.animalNames.push(uniqueNamesGenerator(this.customConfig));
  }

}
