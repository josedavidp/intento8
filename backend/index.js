

const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
const cors = require('cors');

//console.log(process.env);

// servidor de express
const app = express();

//DATABASE

dbConnection();
//cors
app.use(cors());



//Directorio Publicco

app.use(express.static('public')); 


//Rutas
app.use(express.json());

//TODO: auth// crear ,Login,renew
app.use('/api/auth',require('./routes/auth'));

app.use('/api/events',require('./routes/events'));

app.use('/api/registro',require('./routes/registro'));


// lectura y pareseo  del body

//Todo; crud: Eventos





//escuchar peticiones
app.listen(process.env.PORT, ( ) =>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
} ) ;