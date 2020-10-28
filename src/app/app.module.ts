import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TripEditComponent } from './components/trip-edit/trip-edit.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), ],
  declarations: [ AppComponent, HelloComponent,
    TripEditComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
