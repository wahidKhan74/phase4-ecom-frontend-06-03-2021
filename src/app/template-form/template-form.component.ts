import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public userObj = {firstName:'',lastName:'',city:'',password:'',email:'',state:'',zipcode:0 , agree:false};
  public submitted: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(form:any) :void {
    
    if(form.valid){
      this.submitted = true;
      console.log(this.userObj);
    } else {
      this.validateForm(form);
    }
  }

  hasError(field:any){
    return  (field.invalid && field.touched && field.errors);
  }

  validateForm(form:any){
    Object.keys(form.controls).forEach(field =>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelft : true});
    })
  }
}
