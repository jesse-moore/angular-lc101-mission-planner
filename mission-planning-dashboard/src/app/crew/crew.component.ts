import { Component, OnInit } from '@angular/core';

interface Member {
  name: string;
  firstMission: boolean;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css', '../app.component.css'],
})
export class CrewComponent implements OnInit {
  crew: Member[] = [
    { name: 'Eileen Collins', firstMission: false },
    { name: 'Mae Jemison', firstMission: false },
    { name: 'Ellen Ochoa', firstMission: true },
  ];
  memberBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}

  add(memberName: string, isFirst: boolean) {
    if (!this.isCrewMember(memberName)) {
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
  }

  remove(member: Member) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

  isCrewMember(name) {
    return this.crew.find((m) => m.name === name) !== undefined;
  }
}
