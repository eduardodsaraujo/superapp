import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';
import { HeroFilterPipe } from './hero-filter.pipe';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroFilterPipe],
})
export class HeroListComponent implements OnInit {
  heroes : IHero[];
  showImage: boolean = false;
  listFilter = "";

  constructor(private heroService: HeroService) {
   }

   toggleImage(){
     this.showImage = !this.showImage;
   }
  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);

  }

}
