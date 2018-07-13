import { Component, OnInit } from '@angular/core';
//import { Heroes }  from './heroes';
//import {HEROES} from './mock-heroes';
import { HeroService } from '../hero.service';
import { Heroes } from './heroes';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero_test = 'Windstorm jack';
  /*hero : Heroes = {
    id:1,
    name: 'Windstorm jack'
  } */

  //selectedHero : Heroes;
  heroes:Heroes[];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();  
  }

  /*onSelect(hero:Heroes):void {
    this.selectedHero = hero;
  }*/

  getHeroes():void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res;
    });
  }
  

}
