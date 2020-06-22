import { Adelanto } from './adelanto';

export class Pasaje {
    _id: String;
    dniPasajero: number;
    precioPasaje: number;
    categoriaPasajero: String;
    fechaCompra: Date;
    adelantos: Array<Adelanto>= new Array<Adelanto>();

    Pasaje(_id?:String, dniPasajero?: number, precioPasaje?: number, categoriaPasajero?: String, fechaCompra?: Date) {
        this._id = _id;
        this.dniPasajero = dniPasajero;
        this.precioPasaje = precioPasaje;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
    }
}
