import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  img:string = "";

  constructor( private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroeService.getHeroe(params['id']);
    })
  }
}
