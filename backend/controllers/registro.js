const {response} = require('express');

const Modulo = require('../models/modulo');
const Registro = require('../models/registro');

const registrarCurso = async (req, res = response) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { userId, courseData } = req.body;

    // Agrega el userId a la información del curso
    const cursoRegistrado = { ...courseData, uid: userId };

    // Crea un nuevo registro usando el modelo  
    const registro = new Registro(cursoRegistrado);

    const registroGuardado = await registro.save();

    res.json({
      ok: true,
      registro: registroGuardado,
    });
  } catch (error) {
    console.error('Error al registrar el curso:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const obtenerMisCursos = async (req, res = response) => {
  try {
    const { userId } = req.params; // Asumiendo que userId está en los parámetros de la ruta

    // Modificar la lógica para obtener solo los cursos asociados a userId
    const cursosUsuario = await Registro.find({ uid: userId });

    res.json({
      ok: true,
      cursos: cursosUsuario,
    });
  } catch (error) {
    console.error('Error al obtener los cursos del usuario:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

  
module.exports={
  obtenerMisCursos,
    registrarCurso
};