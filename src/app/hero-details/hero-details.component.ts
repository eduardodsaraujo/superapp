import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero:IHero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    if(!this.hero){
      const id = +this.route.snapshot.paramMap.get('id');
      this.getHero(id);
    }
  }

  getHero(id:number){
    this.hero = this.heroService.getHero(id)
  }

  onBack():void{
    this.router.navigate(['heroes']);
  }

}
