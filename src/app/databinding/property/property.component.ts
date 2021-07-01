import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // data binding
  public username:string ="John Smith";
  public age:number = 30;
  public email:string = 'john.smith@gmail.com';
  public isMarried:boolean  = false;
  public imageURL ="./assets/images/smiley.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
