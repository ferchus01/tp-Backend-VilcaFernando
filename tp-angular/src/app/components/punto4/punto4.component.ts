import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { PalabrasService } from 'src/app/services/palabras.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  cantidadPuntaje: number = 0;
  cantidadVidas: number = 6;
  palabraTam: number;
  palabra: string;
  palabras: Array<Palabra>;
  letras: Array<string>;
  d: Array<string>;
  indice: number;

  constructor(private palabrasService: PalabrasService) {
    this.iniciar();
    }

  obtenerPalabras() {
    this.palabras = this.palabrasService.getPalabras();
  }

  iniciar(){
    this.obtenerPalabras();
    this.letras = new Array<string>();
    this.indice = 0;
    this.palabra = this.palabras[this.indice].ingles;
    this.palabraTam = this.palabra.length;
    this.d = this.palabra.split("");
    this.cantidadPuntaje = 0;
    this.cantidadVidas= 6;
  }

  comparar(j: number){
    if(this.letras.join("").toLowerCase() == this.palabra){
      this.cantidadPuntaje++;
      if (this.cantidadPuntaje==10) {
        var result=window.confirm("Felicidades!!!!\n"+"Su puntuacion es: "+this.cantidadPuntaje + "\nFin del juego...Desea volver a jugar?" );
        if(result){
          this.iniciar();
        }
      }
      this.cambiarPalabra();
    }
    else{
      if(this.letras[j].toLowerCase()!=this.d[j] && this.letras[j]!=""){
        this.cantidadVidas--;
      }
    }
    if(this.cantidadVidas==0){
      window.alert("Oh no! Se a quedado sin vidas\n"+"Su puntuacion es: "+this.cantidadPuntaje + "\nFin del juego :(" );
      this.iniciar();
    }
  }

  cambiarPalabra(){
    this.letras = new Array<string>();
    this.indice++;
    this.palabra = this.palabras[this.indice].ingles;
    this.d = this.palabra.split("");
    this.palabraTam = this.palabra.length;
  }
  ngOnInit(): void {
  }

}
