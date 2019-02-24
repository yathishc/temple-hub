import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

temples:any[]=[
 {
    'name':'Iscon',
    'description':'Its an lord krishna temple which is loacted in Sanjose'
 },
 {
    'name':'Vekateshwara',
    'description':'Lord venkateshwara temple which located in milpitas'
 },
 {
   'name':'Ganesha',
   'description':'sdfsdfsdfsdfsdfsdf'
 }
 
];

  constructor() { }

  ngOnInit() {
  }

}

