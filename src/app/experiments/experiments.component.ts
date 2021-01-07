import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css', '../app.component.css'],
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density',
  ];

  itemBeingEdited: string = null;
  constructor() {}

  ngOnInit(): void {}

  add(itemName: string) {
    if (!this.experiments.includes(itemName)) {
      this.experiments.push(itemName);
    }
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(newName: string, oldName: string) {
    this.experiments = this.experiments.map((item) => {
      if (item === oldName) {
        return newName;
      }
      return item;
    });
    this.itemBeingEdited = null;
  }
}
