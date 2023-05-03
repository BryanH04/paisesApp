import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] =[];

  constructor(private paisService:PaisService){}

  buscar(termino: string){
    //Se consume el metodo http
    this.termino = termino; 
    this.hayError = false;//inicializa el metodo definiendo que no existe error
    this.paisService.buscarCapital(termino)//para que el evento suceda debe estar suscrito
    .subscribe( (capital) =>{
      this.paises = capital;
      console.log(capital);
    },(err)=>{
      this.hayError = true; 
    })
  }
}
