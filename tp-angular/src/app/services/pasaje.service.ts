import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  urlBase: string="http://localhost:3000/api/punto3/";

  constructor(private _http: HttpClient) { }

  public getPasajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    return this._http.get(this.urlBase, httpOptions);
  }

  public addPasaje(pasaje: Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pasaje);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  public deletePasaje(pasaje: Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.delete(this.urlBase+pasaje._id, httpOptions);
  }

  public updatePasaje(pasaje: Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pasaje);
    return this._http.put(this.urlBase+pasaje._id, body, httpOptions);
  }

  public getEmpresas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    return this._http.get("http://localhost:3000/api/empresa", httpOptions);
  }
}
