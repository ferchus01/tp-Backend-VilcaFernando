import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';
import { AsistenteService } from 'src/app/services/asistente.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  asistente: Asistente;
  asistentes: Array<Asistente>;

  constructor(private asistenteServicio:AsistenteService) {
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
    this.getAsistentes();
  }
  ngOnInit(): void {
  }

  limpiar(){
    this.asistente = new Asistente();
  }

  public getAsistentes(){
    this.asistentes = new Array<Asistente>();
    this.asistenteServicio.getAsistentes().subscribe(
      (result)=>{
        var asistente: Asistente = new Asistente();
        result.forEach(element => {
          Object.assign(asistente, element);
          this.asistentes.push(asistente);
          asistente = new Asistente();
        });
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public addAsistente(){
    this.asistenteServicio.addAsistente(this.asistente).subscribe(
      (result)=>{
        alert("Asistente guardado");
        this.getAsistentes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    );
    this.asistente = new Asistente();
  }

  public deleteAsistente(asistente: Asistente){
    this.asistenteServicio.deleteAsistente(asistente).subscribe(
      (result)=>{
        alert("Asistente borrado");
        this.getAsistentes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public updateAsistente(){
    this.asistenteServicio.updateAsistente(this.asistente).subscribe(
      (result)=>{
        alert("Asistente modificado");
        this.getAsistentes();
      },
      (error)=>{
        alert("Error en la petición");
      }
    )
  }

  public seleccionarAsistente(asistente: Asistente){
    this.asistente = asistente;
  }
}
