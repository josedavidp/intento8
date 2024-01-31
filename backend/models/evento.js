const {Schema,model}  = require('mongoose');

const EventoSchema = Schema({

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
    },
    content: 
    {
        type: String,
        required: true  
    }
    
  

});

EventoSchema.method('toJSON',function(){
    const {__v,_id, ...object} = this.toObject();
    object.id=_id;
    return object;
});


module.exports= model('Evento',EventoSchema);
