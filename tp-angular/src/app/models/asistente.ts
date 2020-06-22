export class Asistente {
    _id:String;
    usuario: String;
    nombreOrganizacion: String;
    requiereConstancia: boolean;
    fecha: Date;

    Asistente(_id?:String, usuario?: String, nombreOrganizacion?: String, requiereConstancia?: boolean, fecha?: Date) {
        this._id=_id;
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
        this.fecha = fecha;
    }
}
