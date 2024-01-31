const {Router} = require('express');

const {registrarCurso, obtenerMisCursos} = require('../controllers/registro');
const router = Router();


router.post('/', registrarCurso);
router.get('/mis-cursos/:userId', obtenerMisCursos);


module.exports = router;