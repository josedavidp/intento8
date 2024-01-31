const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  name: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },

  age: {
    type: String
  },
  nacionalidad: {
    type: String
   
  },
  ocupacion: {
    type: String
    
  },
  residencia: {
    type: String
    
  },


});
module.exports = model("Usuario", UsuarioSchema);
