import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { OrderSandwichComponent } from './components/order-sandwich/order-sandwich.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddSandwichComponent } from './components/add-sandwich/add-sandwich.component';
import { EditSandwichComponent } from './components/edit-sandwich/edit-sandwich.component';

import { SandwichesService } from './services/sandwiches.service';
import { OrdersService } from './services/orders.service';
import { RecommendationService } from './services/recommendation.service';

@NgModule({
  declarations: [
    AppComponent,
    SandwichesComponent,
    OrderSandwichComponent,
    ConfirmationComponent,
    OrdersComponent,
    AddSandwichComponent,
    EditSandwichComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SandwichesService, OrdersService, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
