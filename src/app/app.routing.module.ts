import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero/hero-list.component';
import { WelcomeComponent } from './home/welcome.component';


const appRoutes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'heroes', component: HeroListComponent },
    { path: 'heroes/:id', component: HeroDetailsComponent},
    { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', redirectTo: '/welcome' }
  ];
  

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
