import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Com01Component } from './com01/com01.component';
import { Com02Component } from './com02/com02.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Directive2Directive } from './directives/directive2.directive';

@NgModule({
  declarations: [
    AppComponent,
    Com01Component,
    Com02Component,
    Directive1Directive,
    Directive2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
