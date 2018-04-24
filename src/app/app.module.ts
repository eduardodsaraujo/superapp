import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeroListComponent } from './hero/hero-list.component';
import { HeroFilterPipe } from './hero/hero-filter.pipe';
import { HeroService } from './hero/hero.service';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeroListComponent,
    HeroFilterPipe,
    HeroDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
