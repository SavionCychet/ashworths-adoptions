import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewRescuesComponent } from './new-rescues/new-rescues.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { NewAdoptsComponent } from './new-adopts/new-adopts.component';
import { AdoptPageComponent } from './adopt-page/adopt-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { AdoptionFormPageComponent } from './adoption-form-page/adoption-form-page.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImgsliderComponent,
    WelcomeComponent,
    NewRescuesComponent,
    AboutPageComponent,
    HomePageComponent,
    ContactPageComponent,
    FooterComponent,
    NewAdoptsComponent,
    AdoptPageComponent,
    DonatePageComponent,
    AdoptionFormPageComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'adopt', component: AdoptPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'donate', component: DonatePageComponent },
      { path: 'adoption', component: AdoptionFormPageComponent },
      { path: 'done', component: DoneComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
