import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//app configurations
import AppErrorHandler from './app.error-handler';
import { AppRoutingModule } from './app.routers';

//app component
import { AppComponent } from './app.component';
import { HomeComponent } from './_common/layout/home/home.component';
import { AboutComponent } from './_common/layout/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{
    provide: ErrorHandler, useClass: AppErrorHandler
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
