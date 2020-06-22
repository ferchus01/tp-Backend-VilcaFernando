const mongoose = require('mongoose');
const Adelanto = require('./adelanto');
const {Schema} = mongoose;
const pasajeSchema = new Schema(
    {
        dniPasajero : {type : Number, required:true},
        precioPasaje : {type : Number, required : true },
        categoriaPasajero: {type : String, required :true},
        fechaCompra : {type : Date , required : true},
        adelantos : { type: [Adelanto.schema] , required :true}
    }
)
module.exports= mongoose.model('Pasaje',pasajeSchema);