import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public username :string ='';
  public message:string='';
  public data:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public onInputChage(event:any) {
    this.username = event.target.value;
  }

  public onSave(event:any){
    console.log(this.username);
  }

  onDateChange($event:any){
    this.message = $event.target.value;
  }
  
}
