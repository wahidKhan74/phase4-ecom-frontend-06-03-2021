import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products :any ;
  constructor(private apiService : ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.apiService.getProducts().subscribe(res=>{
      this.products = res;
      // console.log(res);
    }, err =>{
      console.log("Failed to load products data",err);
    });
  }


  goToCreate() {
    this.router.navigateByUrl("/products/create");
  }

  onDelete(id:string){
    this.apiService.deleteProduct(id).subscribe(res=>{
      console.log("Product is deleted sucessfully !");  
      this.getProducts();    
    }, err =>{
      console.log("Product deletion failed !");      
    })
  }
}
