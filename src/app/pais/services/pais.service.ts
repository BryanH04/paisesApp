import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1'
  pais!: Country;
  saveCountry: Country[] = [];
  
  constructor(private http: HttpClient) {
    if(localStorage.getItem('historial')){
      this.pais = JSON.parse(localStorage.getItem('historial')!) 
      console.log(this.pais)
    }
   }
  getpaisCountry(){
    return this.saveCountry;
  }
  get hettpParams(){
    return new HttpParams()//Es un objeto que me permite configurar los parametros del rest, agregando nuevos params
    .set('fields','name,capital,cca2,flags,population')
  }

  //Aqui se define el metodo http para buscar por pais
  buscarPais(termino: string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return  this.http.get<Country[]>(url,{params: this.hettpParams});
                //Es otra forma de manejar el error M8-V1 3
                // .pipe(
                //   catchError( err => of([]))
                // )
    
  }
  arreglo: Country[] =[];
  guardarHistorial(country: Country){//Aqui guardo el historial
    console.log(this.saveCountry.length)
    if(this.saveCountry.length === 0){
      this.saveCountry.push(country)
      console.log(this.saveCountry)
      localStorage.setItem('historial', JSON.stringify(this.saveCountry));
    }
    const resultado = this.saveCountry.find( pais => pais.name.common === country.name.common );
    console.log(resultado);    
    if(resultado===undefined){ 
      this.saveCountry.unshift(country)
      localStorage.setItem('historial', JSON.stringify(this.saveCountry));
    }
    if(localStorage.getItem('historial')){
        this.pais = JSON.parse(localStorage.getItem('historial')!) 
    }
  }
  guardarArregloHistorial(){
    this.saveCountry =JSON.parse(localStorage.getItem('historial')!);
    return JSON.parse(localStorage.getItem('historial')!)
  }
  //Aqui se define el metodo http para buscar por capital 
  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    // console.log(this.hettpParams)
    return this.http.get<Country[]>(url,{params: this.hettpParams});
  }

  //Aqui se define el metodo http para buscar por capital 
  getPaisCode(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    // console.log("Este es el id" + id);
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    // const params = new HttpParams()//Es un objeto que me permite configurar los parametros del rest, agregando nuevos params
    // .set('fields','name,capital,cca2,flags,population;')
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.hettpParams})
  }

}
