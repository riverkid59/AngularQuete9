import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  myDeveloper: Developer;
  constructor() { }

  ngOnInit(): void {

    this.myDeveloper = new Developer();

    const devSkill = new Skill();
    devSkill.name = 'Angular';
    devSkill.site = 'https://angular.io/';
    devSkill.logo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

    this.myDeveloper.firstName = 'John';
    this.myDeveloper.lastName = 'Doe';
    this.myDeveloper.bio = 'Ninja Developper';
    this.myDeveloper.skills = [devSkill];
  }

}
