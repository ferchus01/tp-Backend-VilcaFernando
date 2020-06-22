const Asistente = require('../models/asistente'); 

const AsistenteCtrl={};

AsistenteCtrl.getAsistente = async(req,res)=>{
    asistentes = await Asistente.find();
    res.json(asistentes);
}

AsistenteCtrl.crearAsistente =async(req,res)=>{
    const asistente = new Asistente (req.body);
    await asistente.save();
    res.json({
        'status':'Asistente Agregado'
    })
}
AsistenteCtrl.deleteAsistente = async (req, res)=>{
    await Asistente.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Asistente Eliminado'
    })
}

AsistenteCtrl.editAsistente = async (req, res) => {
    const asisten =  new Asistente (req.body);

    await Asistente.findByIdAndUpdate(req.params.id, {$set: asisten}, {new: true});
    res.json({
        'status': 'Asistente Modificado'
    })
}
module.exports=AsistenteCtrl;