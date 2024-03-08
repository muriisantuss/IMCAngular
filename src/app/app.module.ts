import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IMCComponent } from './imc/imc.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { provideEnvironmentNgxCurrency, NgxCurrencyInputMode } from 'ngx-currency';


@NgModule({
  declarations: [
    AppComponent,
    IMCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxCurrencyDirective
  ],
  providers: [provideEnvironmentNgxCurrency({
    align: "left",
    allowNegative: false,
    allowZero: false,
    decimal: ",",
    precision: 2,
    prefix: "",
    suffix: "",
    thousands: ".",
    nullable: false,
    min: null,
    max: null,
    inputMode: NgxCurrencyInputMode.Financial,
  }),],
  bootstrap: [AppComponent]


})
export class AppModule { }
