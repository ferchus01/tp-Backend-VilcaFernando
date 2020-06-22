const Pasaje = require('../models/pasaje'); 

const pasajeCtrl={};

pasajeCtrl.getPasaje = async(req,res)=>{
    pasajes = await Pasaje.find();
    res.json(pasajes);
}

pasajeCtrl.crearPasaje =async(req,res)=>{
    const pasaje = new Pasaje (req.body);
    await pasaje.save();
    res.json({
        'status':'Pasaje Agregado'
    })
}
pasajeCtrl.deletePasaje = async (req, res)=>{
    await Pasaje.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pasaje Eliminado'
    })
}

pasajeCtrl.editPasaje = async (req, res) => {
    const pasaje =  new Pasaje (req.body);

    await Pasaje.findByIdAndUpdate(req.params.id, {$set: pasaje}, {new: true});
    res.json({
        'status': 'Pasaje Modificado'
    })
}
module.exports=pasajeCtrl;