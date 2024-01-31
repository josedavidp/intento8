
/**
 * Rutas Usuarios/Auth 
 * Host+/api/auth
 */




const {Router} = require('express');
const{check} =require('express-validator')

const router = Router();
const{validaCampos} = require('../middlewares/validar-campos')

const { createUser ,loginUser,revalidarToken,actualizarUsuario} = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt')

router.post(
    '/new',
    [//middlewares
          check('name','El nombre es obligatorio').not().isEmpty(),
          check('lastname','El nombre es obligatorio').not().isEmpty(),
          check('email','El email es obligatorio').isEmail(),
          check('password','El password es obligatorio de 6 digitos').isLength({min: 6}),  // Aqui falta otro check password2
          validaCampos
    ],
    createUser);

router.post(
    '/',
    [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password es obligatorio de 6 digitos').isLength({min: 6}),
        validaCampos 
    ], loginUser);



router.get('/renew',validarJWT,revalidarToken );

router.put('/:userId', actualizarUsuario);



module.exports = router;