import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string ="http://localhost:4000/api/products";

  constructor(private httpClient:HttpClient) { }

  // get all produts
  public getProducts(){
    return this.httpClient.get(this.url);
  }

  // get one products
  public getOneProduct(id:string){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // create a product
  public addProduct(product:any){
    return this.httpClient.post(this.url,product );
  }

  // update a product
  public updateProduct(id:string,product:any){
    return this.httpClient.put(`${this.url}/${id}`,product );
  }

  // delete a product
  public deleteProduct(id:string){
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
