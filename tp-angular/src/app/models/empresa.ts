export class Empresa {
    _id: String;
    nombre: String;
    email: String;

    Mensaje(_id?: String, nombre?: String, email?: String) {
        this._id = _id;
        this.nombre = nombre;
        this.email = email;
    }
}
