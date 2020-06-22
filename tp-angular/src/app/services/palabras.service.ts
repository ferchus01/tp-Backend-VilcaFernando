import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
  palabrasJuego: Array<any>;

  constructor() {
    this.palabrasJuego = new Array<Palabra>();
    this.palabrasJuego = [
      {
        id: 1,
        imagen: "leon.jpg",
        espaniol: "leon",
        ingles: "lion"
      },
      {
        id: 2,
        imagen: "elefante.jpg",
        espaniol: "elefante",
        ingles: "elephant"
      },
      {
        id: 3,
        imagen: "tigre.jpg",
        espaniol: "tigre",
        ingles: "tiger"
      },
      {
        id: 4,
        imagen: "perro.jpg",
        espaniol: "perro",
        ingles: "dog"
      },
      {
        id: 5,
        imagen: "gato.jpg",
        espaniol: "gato",
        ingles: "cat"
      },
      {
        id: 6,
        imagen: "aguila.jpg",
        espaniol: "aguila",
        ingles: "eagle"
      },
      {
        id: 7,
        imagen: "lobo.jpg",
        espaniol: "lobo",
        ingles: "wolf"
      },
      {
        id: 8,
        imagen: "jirafa.jpg",
        espaniol: "jirafa",
        ingles: "giraffe"
      },
      {
        id: 9,
        imagen: "pantera.jpg",
        espaniol: "pantera",
        ingles: "panther"
      },
      {
        id: 10,
        imagen: "ballena.jpg",
        espaniol: "ballena",
        ingles: "whale"
      }
    ]
  }

  getPalabras(){
    return this.desordenarPalabras();
  }

  desordenarPalabras(){
    this.palabrasJuego = this.palabrasJuego.sort(function() {return Math.random() - 0.5});
    return this.palabrasJuego;
  }
}
