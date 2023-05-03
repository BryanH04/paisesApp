import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{
  pais!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisCode(id)), tap(console.log)
        )
        // .subscribe((data:Country[]) => {this.pais = data[data.length-1]

        .subscribe(data => {this.pais = data[0]
          this.paisService.guardarHistorial(this.pais)
    })
    //   .subscribe(({id}) =>{
    //     console.log(id);
    //     this.paisService.getPaisCode(id).subscribe(pais => this.pais = pais)
    //   });
  }
  

}
