import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css', '../app.component.css'],
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks',
  ];
  itemBeingEdited: string = null;
  constructor() {}

  ngOnInit(): void {}

  add(itemName: string) {
    if (!this.equipment.includes(itemName)) {
      this.equipment.push(itemName);
    }
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(newName: string, oldName: string) {
    this.equipment = this.equipment.map((item) => {
      if (item === oldName) {
        return newName;
      }
      return item;
    });
    this.itemBeingEdited = null;
  }
}
