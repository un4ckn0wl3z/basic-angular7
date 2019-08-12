import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Com01Component } from './components/home/com01/com01.component';
import { Com02Component } from './components/home/com02/com02.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Directive2Directive } from './directives/directive2.directive';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateDirective } from './directives/validate.directive';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './shares/navbar/navbar.component';
import { ActivateGuard } from './guards/activate.guard';
import { HttpClientModule } from '@angular/common/http';
import { SharesModule } from './shares/shares.module';


@NgModule({
  declarations: [
    AppComponent,
    Com01Component,
    Com02Component,
    Directive1Directive,
    Directive2Directive,
    Pipe1Pipe,
    Pipe2Pipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharesModule
  ],
  providers: [ActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
