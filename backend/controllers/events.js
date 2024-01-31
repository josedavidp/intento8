
const {response} = require('express');
const Evento = require('../models/evento');
const Modulo = require('../models/modulo');

const getEvento = async(req,res = response)=>{

        //const eventos = await Evento.find().populate('user','name');
        const eventos = await Evento.find();
        res.json({ ok:true,
            eventos})

}

const crearEvento = async(req,res = response)=>{
    
    const evento = new Evento(req.body);

    try {

       // evento.user = req.uid;

        const eventoGuardado = await evento.save();

        
        res.json({ ok:true,
            idCurso: eventoGuardado.id})

    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:true,
            msg:'Hable con el administrador'})
    }
    


  
}

const actualizarEvento =  async(req,res = response)=>{
     
    const eventoID = req.params.uid;
    const uid = req.uid;
    

    try {

        const  nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoID,nuevoEvento,{new:true});

        res.json({ ok:true,
            evento:eventoActualizado})


    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:true,
            msg:'Hable con el administrador'})
    }
    

}


const eliminarEvento =  async(req,res = response)=>{


    const eventoID = req.params.id;
    const uid = req.uid;
    

    try {

        const evento = await Evento.findById(eventoID);
        if (!evento){
            return res.status(404).json({ ok:false,
                msg:'Evento no existe por ese id'})

        }
        
        if (evento.user.toString() !== uid) {
            return res.status(401).json({ ok:false,
                msg:'No tiene privilegio de eliminar este evento'})
        }

        

         await Evento.findByIdAndDelete(eventoID);

        res.json({ ok:true})


    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:true,
            msg:'Hable con el administrador'})
    }

    //res.json({ ok:true,
        //msg:'eliminarEvento'})

}

const registrarModulo = async (req, res) => {
    try {
        const { idCurso } = req.params;
        const modulos = req.body;
    
        // Validaciones adicionales si es necesario
        // ...
    
        // Transforma el array de módulos a un formato compatible con tu modelo de Mongoose
        const modulosParaGuardar = modulos.map((modulo) => ({
          idCurso: idCurso,
          titulo: modulo.titulo,
          video: modulo.video,
          informacion_extra: modulo.informacion_extra,
          // Puedes agregar más campos si los necesitas
        }));
    
        // Guarda los módulos en la base de datos
        const modulosGuardados = await Modulo.insertMany(modulosParaGuardar);
    
        res.status(201).json({ modulos: modulosGuardados });
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al guardar los módulos en la base de datos' });
      }
};

const obtenerModulo = async (req, res) => {
    const idCurso = req.params.idCurso;

    try {
      const cursos = await Modulo.find({ idCurso: idCurso });
      res.json({ cursos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener los cursos' });
    }
};
  

module.exports={
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
    registrarModulo,
    obtenerModulo
}




