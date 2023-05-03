import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:  EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = ''
  //subject es un observable
  debouncer:Subject<string> = new Subject(); 
  termino: string = '';

  ngOnInit(){
  this.debouncer
  .pipe(
    debounceTime(300))
  .subscribe(valor =>{
    this.onDebounce.emit(valor)
  });  


}
  // Cuando se presiona enter se dispara el evento buscar,  y buscar emite el valor y luego dispara el otro buscar 
  buscar(){
    this.onEnter.emit(this.termino); 
  }
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
