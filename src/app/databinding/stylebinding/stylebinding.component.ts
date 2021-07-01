import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  // data binding
  public username:string ="John Smith";
  public age:number = 30;
  public email:string = 'john.smith@gmail.com';
  public isMarried:boolean  = false;
  public imageURL ="./assets/images/smiley.jpg";

  // style 
  public color= {RED :'red', ORANGE:'orange', BLUE:'blue', GREY:'grey', YELLOW:'#efd82ed4'};
  public active : boolean =false;


  constructor() { }

  ngOnInit(): void {
  }

}
