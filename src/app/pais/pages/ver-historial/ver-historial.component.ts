import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-historial',
  templateUrl: './ver-historial.component.html',
  styles: [
  ]
})
export class VerHistorialComponent implements OnInit{
  numero: number = 0;
  pais: Country [] = [];
  servicio!: Country;
constructor(private paisService: PaisService){}
ngOnInit(){
  //this.paisService.guardarArregloHistorial()
  this.pais = this.paisService.guardarArregloHistorial();
   this.numero = this.pais.length;

  } 
}

