import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './core/components/aboutme/aboutme.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { MyserviceComponent } from './core/components/myservice/myservice.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    ContactComponent,
    MyserviceComponent,
    MyprojectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
