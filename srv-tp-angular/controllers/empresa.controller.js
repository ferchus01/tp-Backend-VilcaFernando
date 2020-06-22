const Empresa = require('../models/empresa'); 

const empresaCtrl={};

empresaCtrl.getEmpresa = async(req,res)=>{
    empresas = await Empresa.find();
    res.json(empresas);
}

empresaCtrl.crearEmpresa =async(req,res)=>{
    const empresa = new Empresa (req.body);
    await empresa.save();
    res.json({
        'status':'Empresa Agregada'
    })
}
empresaCtrl.deleteEmpresa = async (req, res)=>{
    await Empresa.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Empresa eliminada'
    })
}

empresaCtrl.editEmpresa = async (req, res) => {
    const empresa =  new Empresa (req.body);

    await Empresa.findByIdAndUpdate(req.params.id, {$set: empresa}, {new: true});
    res.json({
        'status': 'Empresa Modificada'
    })
}
module.exports=empresaCtrl;