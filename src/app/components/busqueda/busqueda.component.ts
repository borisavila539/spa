import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import {Router} from '@angular/router'
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent{
  heroes:any= [];
  buscar:string = "";
  
  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService, private _router:Router) {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroeService.buscarHeroe(params['buscar']);
      this.buscar = params['buscar'];
    })
   }
}
