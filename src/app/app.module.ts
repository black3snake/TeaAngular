import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import { PopupComponent } from './components/common/popup/popup.component';
import { AnswersComponent } from './components/common/answers/answers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {AnswersDbService} from "./services/answers-db.service";
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { TextLimitPipe } from './pipes/text-limit.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    ProductComponent,
    OrderComponent,
    PopupComponent,
    AnswersComponent,
    TextLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AnswersDbService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
