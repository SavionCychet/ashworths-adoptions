import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewRescuesComponent } from './new-rescues/new-rescues.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImgsliderComponent,
    WelcomeComponent,
    NewRescuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
