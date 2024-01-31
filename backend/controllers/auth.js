
const {response} = require('express');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/Usuario');
const {generarJWT} = require('../helpers/jwt');

 const createUser = async(req, res = response) =>{

    const {email,password,password2}  =  req.body;


    try {

        let  usuario = await Usuario.findOne({email});

        console.log(usuario);
        if (usuario) {

            res.status(400).json({ok:false,
                msg: 'El usuario ya existe con ese correo'});
        }

        
         usuario = new Usuario(req.body);


         //Encriptar contraseñas
         if (password !== password2) {

             res.status(400).json({ok:false,
                msg: 'Las contraseñas no coinciden'});
          }else{

            const salt = bcrypt.genSaltSync();
         usuario.password = bcrypt.hashSync(password,salt);
         usuario.password2 = usuario.password;
         
      
         await usuario.save();

         //generar JWT
         const token = await generarJWT(usuario.id,usuario.name);
     
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token})

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
        msg: 'Contacta con el administrador'})
        
    }
    
}
// -------------------------------------------------------------------------------------Login-Usuario--------------------

 const loginUser = async (req, res = response) =>{

    const {email,password} =  req.body;

    try {

        const  usuario = await Usuario.findOne({email});

        console.log(usuario);
        if (!usuario) {
           return res.status(400).json(
                {ok:false,
                msg: 'El usuario no existe con ese email'});
        }

        //confirmar passwords
        const validPassword = bcrypt.compareSync(password,usuario.password);
        if (!validPassword) {
            return res.status(400).json(
                {
                    ok:false,
                    msg:'Password incorrecto'
                });
        }

        //generar nuestro jwt

        const token = await generarJWT(usuario.id,usuario.name);
     
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            age: usuario.age,
            nacionalidad: usuario.nacionalidad,
            ocupacion: usuario.ocupacion,
            residencia: usuario.residencia,
            token})

        

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
        msg: 'Contacta con el administrador'})
    }



    //r/es.status(201).json({
        //ok: true,
       //  msg: 'login',
       //  email,
         //password}) 
} 
//-------------------------------------------------------------RevalidarTOken-------------
const revalidarToken = (req, res = response) =>{
    const uid = req.uid;
    const name = req.name;
    
    res.json({ok: true,
    uid,name}) 
}


const actualizarUsuario =  async(req,res = response)=>{
     
    const { userId } = req.params;

    try {

        const  nuevoEvento = {
            ...req.body,
            
        }

        const eventoActualizado = await Usuario.findByIdAndUpdate(userId,nuevoEvento,{new:true});

        res.json({ ok:true,
            evento:eventoActualizado})


    } catch (error) {
        console.log(error);
        res.status(500).json({ ok:true,
            msg:'Hable con el administrador'})
    }
    

}


module.exports = {
    createUser,
    loginUser,
    revalidarToken,
    actualizarUsuario
}