import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from './../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

// свойство hero - типизация класс Hero
  hero: Hero = {
    id: 1,
    name: 'Wisdom'
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

    heroes: Hero[];
    selectedHero: Hero;


  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }


  // onSelect = (hero: Hero): void => {
  //   this.selectedHero = hero;
  // }
  
}
