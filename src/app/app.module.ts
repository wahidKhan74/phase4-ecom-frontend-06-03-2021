import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyComponent } from './databinding/property/property.component';
import { StylebindingComponent } from './databinding/stylebinding/stylebinding.component';
import { EventComponent } from './databinding/event/event.component';
import { TemplateFormComponent } from './template-form/template-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    NotFoundComponent,
    PropertyComponent,
    StylebindingComponent,
    EventComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
