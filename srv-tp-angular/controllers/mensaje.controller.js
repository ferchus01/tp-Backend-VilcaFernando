const Mensaje = require('../models/mensaje'); 

const mensajeCtrl={};

mensajeCtrl.getMensaje = async(req,res)=>{
    mensajes = await Mensaje.find().populate("empresa");
    res.json(mensajes);
}

mensajeCtrl.crearMensaje =async(req,res)=>{
    const mensaje = new Mensaje (req.body);
    await mensaje.save();
    res.json({
        'status':'Mensaje Agregado'
    })
}
mensajeCtrl.deleteMensaje = async (req, res)=>{
    await Mensaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Mensaje Eliminado'
    })
}

mensajeCtrl.editMensaje = async (req, res) => {
    const mensaje =  new Mensaje (req.body);

    await Mensaje.findByIdAndUpdate(req.params.id, {$set: mensaje}, {new: true});
    res.json({
        'status': 'Mensaje Modificado'
    })
}
module.exports=mensajeCtrl;