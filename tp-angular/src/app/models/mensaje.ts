import { Empresa } from './empresa';

export class Mensaje {
    _id: String;
    para: number;
    desde: number;
    texto: String;
    fecha: Date;
    empresa: Empresa;

    Mensaje(_id?: String, para?: number, desde?: number, texto?: String, fecha?: Date) {
        this._id = _id;
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
        this.empresa = new Empresa();
    }
}
