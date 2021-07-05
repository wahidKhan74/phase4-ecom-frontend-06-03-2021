import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public exampleForm:FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder:FormBuilder) {
    this.exampleForm = this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(2),Validators.maxLength(15)]],
      lastName:['', [Validators.required, Validators.minLength(2),Validators.maxLength(15)] ],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      city:['',[Validators.required, Validators.minLength(6),Validators.maxLength(15)]],
      state:['',Validators.required],
      zipcode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]*$")] ],
      agree:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  

  public hasError(field:any){
    return (this.exampleForm.get(field)?.invalid && this.exampleForm.get(field)?.touched && 
    this.exampleForm.get(field)?.errors );
  }

  submitForm(form:any){
    if(form.valid){
      this.submitted = true;
      console.log(this.exampleForm.value); 
    } else{
      this.validateForm(form);
    }
       
  }

  validateForm(form: any) {
   Object.keys(form.controls).forEach(field => {
     const control = form.get(field);
     if(control instanceof FormControl){
       control.markAsTouched({onlySelf:true});
     }else{
       this.validateForm(control);
     }
   });
  }

  get f() {
    return this.exampleForm.controls;
  }


}
