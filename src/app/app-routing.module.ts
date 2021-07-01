import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';
import { DetailsComponent } from './products/details/details.component';
import { SearchComponent } from './products/search/search.component';
import { PropertyComponent } from './databinding/property/property.component';
import { StylebindingComponent } from './databinding/stylebinding/stylebinding.component';
import { EventComponent } from './databinding/event/event.component';

const routes: Routes = [
  { path:'' , redirectTo:'/home', pathMatch:'full' },
  { path:'home' , component:HomeComponent },
  { path:'users' , component:UsersComponent },
  { path:'products' , children:[
    { path:'' , component:ProductsComponent },
    { path:'create' , component:CreateComponent },
    { path:'update' , component:UpdateComponent },
    { path:'details' , component:DetailsComponent },
    { path:'search' , component:SearchComponent },
  ] },
  { path:'databinding' , children:[
    { path:'property', component:PropertyComponent},
    { path:'style', component:StylebindingComponent},
    { path:'event', component:EventComponent}
  ]},
  { path:'**' , component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
