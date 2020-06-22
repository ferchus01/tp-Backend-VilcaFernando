export class Adelanto {
    _id:String;
    fecha: Date;
    cobrador: String;
    montoAdelanto: number;

    Pasaje(_id?: String, fecha?: Date, cobrador?: String, montoAdelanto?: number) {
        this._id = _id;
        this.fecha = fecha;
        this.cobrador = cobrador;
        this.montoAdelanto = montoAdelanto;
    }
}
