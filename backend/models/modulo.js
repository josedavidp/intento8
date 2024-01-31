const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  idCurso: {
    type: String,
    required: true,
  },

  video: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  informacion_extra: {
    type: String,
    required: true,
  },
});

module.exports = model("Modulo", EventoSchema);
