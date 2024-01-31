    

const {Schema,model}  = require('mongoose');

const registroSchema = Schema({

    uid:{type: String,
        required: true},

    id:{type: String,
        required: true},

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    icon: {
        type: String,
        required: true  
    }
  
  

});


module.exports= model('Registro',registroSchema);
