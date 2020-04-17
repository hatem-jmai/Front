import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './shared/components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotemissionComponent } from './modules/notemission/notemission.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotemissionComponent,

    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    FormsModule,


    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
