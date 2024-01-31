/*
    eventRoutes
    api/events


*/ 

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const {getEvento,crearEvento,actualizarEvento,eliminarEvento,registrarModulo,obtenerModulo} = require('../controllers/events');
const { check } = require('express-validator');

const{isDate} = require('../helpers/isDate');
const{validaCampos} = require('../middlewares/validar-campos');

const router = Router();



//Todas itenen que pasar por la validacion del token JWT

//router.use(validarJWT);

//Obtener eventos

router.get('/', getEvento);

//Crear un nuevo evento
router.post(
    '/',
    [
    check('title','El titulo es obligatorio').not().isEmpty(),
   
    validaCampos    
    ],
     crearEvento
     );

//Actualizar evento
router.put('/:id', actualizarEvento);

//Eliminar Evento
router.delete('/:id', eliminarEvento);

router.post('/:idCurso',registrarModulo);

router.get('/:idCurso',obtenerModulo);


module.exports = router;