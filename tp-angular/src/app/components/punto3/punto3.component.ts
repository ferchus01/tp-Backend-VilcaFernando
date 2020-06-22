import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';
import { Adelanto } from 'src/app/models/adelanto';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  adelanto: Adelanto;
  precioDescuento: number = 0;
  precioActual: number = 0;
  mostrarDescuento: boolean = false;
  validacionAdelanto: boolean = false;
  avisoAdelanto: boolean = false;

  constructor(private pasajeServicio: PasajeService) {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.adelanto = new Adelanto();
    this.getPasajes();
  }

  public limpiar() {
    this.pasaje = new Pasaje();
  }

  public getPasajes() {
    this.pasajes = new Array<Pasaje>();
    this.pasajeServicio.getPasajes().subscribe(
      (result) => {
        var pasaje: Pasaje = new Pasaje();
        result.forEach(element => {
          Object.assign(pasaje, element);
          this.pasajes.push(pasaje);
          pasaje = new Pasaje();
        });
      },
      (error) => {
        alert("Error en la petición");
      }
    )
    
  }

  public addPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasajeServicio.addPasaje(this.pasaje).subscribe(
      (result) => {
        alert("Pasaje guardado");
        this.getPasajes();
      },
      (error) => {
        alert("Error en la petición");
      }
    );
    this.pasaje = new Pasaje();
    this.mostrarDescuento = false;
  }

  public deletePasaje(pasaje: Pasaje) {
    this.pasajeServicio.deletePasaje(pasaje).subscribe(
      (result) => {
        alert("Pasaje borrado");
        this.getPasajes();
      },
      (error) => {
        alert("Error en la petición");
      }
    )
  }

  public updatePasaje() {
    this.pasajeServicio.updatePasaje(this.pasaje).subscribe(
      (result) => {
        alert("Pasaje modificado");
        this.getPasajes();
      },
      (error) => {
        alert("Error en la petición");
      }
    )
  }

  public addAdelanto() {
    this.adelanto.fecha = new Date();
    this.pasaje.adelantos.push(this.adelanto);
    this.adelanto = new Adelanto();
    var suma = 0;
    for (let i = 0; i < this.pasaje.adelantos.length; i++) {
      suma = suma + this.pasaje.adelantos[i].montoAdelanto;
    }
    if (this.precioActual != null) {
      if (suma == this.precioActual) {
        this.avisoAdelanto = true;
      }
    }
  }

  public deleteAdelanto(adelanto: Adelanto) {
    var indice = this.pasaje.adelantos.findIndex((element) => element._id = adelanto._id);
    this.pasaje.adelantos.splice(indice, 1);
    var suma = 0;
    for (let i = 0; i < this.pasaje.adelantos.length; i++) {
      suma = suma + this.pasaje.adelantos[i].montoAdelanto;
    }
    if (this.precioActual != null) {
      if (suma < this.precioActual) {
        this.avisoAdelanto = false;
      }
    }
  }

  public seleccionarPasaje(pasaje: Pasaje) {
    this.pasaje = pasaje;
  }

  public calcularDescuento() {
    if (this.pasaje.categoriaPasajero == "m") {
      this.precioDescuento = (this.pasaje.precioPasaje * 25) / 100;
      this.precioActual = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
      //this.cantMenor++;
    }
    if (this.pasaje.categoriaPasajero == "j") {
      this.precioDescuento = (this.pasaje.precioPasaje * 50) / 100;
      this.precioActual = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
      //this.cantJubilado++;
    }
    if (this.pasaje.categoriaPasajero == "a") {
      this.precioActual = this.pasaje.precioPasaje;
    }
  }

  validarAdelanto() {
    var suma = 0;
    for (let i = 0; i < this.pasaje.adelantos.length; i++) {
      suma = suma + this.pasaje.adelantos[i].montoAdelanto;
    }
    if (this.pasaje.precioPasaje != null) {
      if (this.adelanto.montoAdelanto > this.precioActual || (suma + this.adelanto.montoAdelanto) > this.precioActual) {
        this.validacionAdelanto = true;
      }
      else {
        this.validacionAdelanto = false;
      }
    }
  }
  ngOnInit(): void {
  }

}
