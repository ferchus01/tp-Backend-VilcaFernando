import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MensajeService } from 'src/app/services/mensaje.service';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  mensaje: Mensaje;
  tamMaxTexto: number = 30;
  tamTexto: number;
  mensajes: Array<Mensaje>;
  empresas: Array<Empresa>;
  
  constructor(public modal:NgbModal, private mensajeServicio: MensajeService) {
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
    this.empresas = new Array<Empresa>();
    this.getMensajes();
    this.getEmpresas();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  public limpiar(){
    this.mensaje = new Mensaje();
  }
  public getMensajes(){
    this.mensajes = new Array<Mensaje>();
    this.mensajeServicio.getMensajes().subscribe(
      (result)=>{
        var mensaje: Mensaje = new Mensaje();
        result.forEach(element => {
          Object.assign(mensaje, element);
          this.mensajes.push(mensaje);
          mensaje = new Mensaje();
        });
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public addMensaje(){
    this.mensaje.fecha = new Date();
    this.mensajeServicio.addMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("Mensaje guardado");
        this.getMensajes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    );
    this.mensaje = new Mensaje();
  }

  public deleteMensaje(mensaje: Mensaje){
    this.mensajeServicio.deleteMensaje(mensaje).subscribe(
      (result)=>{
        alert("Mensaje borrado");
        this.getMensajes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public updateAsistente(){
    this.mensajeServicio.updateMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("Mensaje modificado");
        this.getMensajes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public getEmpresas(){
    this.empresas = new Array<Empresa>();
    this.mensajeServicio.getEmpresas().subscribe(
      (result)=>{
        var empresa: Empresa = new Empresa();
        result.forEach(element => {
          Object.assign(empresa, element);
          this.empresas.push(empresa);
          empresa = new Empresa();
        });
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public seleccionarMensaje(mensaje: Mensaje){
    mensaje.empresa = this.empresas.find(element=>element._id == mensaje.empresa._id)
    this.mensaje = mensaje;
  }
}
