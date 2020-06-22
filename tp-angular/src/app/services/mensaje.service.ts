import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  urlBase: string="http://localhost:3000/api/punto2/";

  constructor(private _http: HttpClient) { }

  public getMensajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    return this._http.get(this.urlBase, httpOptions);
  }

  public addMensaje(mensaje: Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(mensaje);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  public deleteMensaje(mensaje: Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase+mensaje._id, httpOptions);
  }

  public updateMensaje(mensaje: Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(mensaje);
    return this._http.put(this.urlBase+mensaje._id, body, httpOptions);
  }

  public getEmpresas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    return this._http.get("http://localhost:3000/api/empresa", httpOptions);
  }
}
