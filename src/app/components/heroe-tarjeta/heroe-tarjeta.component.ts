import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent{
  @Input() heroe:any ={};
  @Input() index: number = 0;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }
  

  verHeroe(){
    //this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['heroe',this.index])
  }

}
