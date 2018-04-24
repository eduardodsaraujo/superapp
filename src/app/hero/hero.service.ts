import { Injectable } from '@angular/core';
import { IHero } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): IHero[]{
    return [
        {
            "heroId": 1,
            "heroName": "Captain America",
            "realName": "Steven Rogers",
            "heroStrength": "Shield",
            "heroNature": "Confident",
            "imageUrl": "./assets/images/cap.jpg"
        },
        {
            "heroId": 2,
            "heroName": "Iron Man",
            "realName": "Tony Stark",
            "heroStrength": "Suit and Jarvis",
            "heroNature": "Stylish",
            "imageUrl": "./assets/images/IronMan.jpg"
        },
        {
              "heroId": 3,
            "heroName": "Thor",
            "realName": "Thor",
            "heroStrength": "Hammer",
            "heroNature": "Confused",
            "imageUrl": "./assets/images/thor.jpg"
        },
        {
            "heroId": 4,
            "heroName": "Hulk",
            "realName": "Bruce Banner",
            "heroStrength": "Size",
            "heroNature": "Angry",
            "imageUrl": "./assets/images/hulk.jpg"
        },
        {
            "heroId": 5,
            "heroName": "Black Widow ",
            "realName": "Agent Romanoff ",
            "heroStrength": "Mind Games",
            "heroNature": "Smart",
            "imageUrl": "./assets/images/blackwidow.jpg"
        },
        {
            "heroId": 6,
            "heroName": "Agent Fury",
            "realName": "Nick Fury",
            "heroStrength": "Nothing",
            "heroNature": "Serious",
            "imageUrl": "./assets/images/fury.jpg"
        }
    ];
  }

  getHero(id:number){
    return this.getHeroes().find(p => p.heroId === id);
  }

}
