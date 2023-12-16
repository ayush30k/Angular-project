import { Component, OnInit } from '@angular/core';

export interface UserData {
  skill: string;
  hoexp: string;
  level: string;
  percent_bar:number;
}

const ELEMENT_DATA: UserData[] = [
  { skill: 'J2EE', hoexp: '1.2 years', level: 'Intermediate' ,percent_bar:75},
  { skill: 'Angular', hoexp: '1 year', level: 'Intermediate' ,percent_bar:70},
  { skill: 'Spring Boot', hoexp: '1.7 years', level: 'Advanced' ,percent_bar:90},
  { skill: 'MySql', hoexp: '1 year', level: 'Intermediate' ,percent_bar:80},
  { skill: 'Microservice', hoexp: '1.7 years', level: 'Advanced' ,percent_bar:90},
  { skill: 'AWS Cloud', hoexp: '3 Months', level: 'Begineer' ,percent_bar:40},
  { skill: 'Scala', hoexp: '2 Months', level: 'Begineer' ,percent_bar:20},

];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  isMobile= false;

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['skill', 'hoexp', 'level','percent_bar'];
  dataSource = ELEMENT_DATA;
  
}
