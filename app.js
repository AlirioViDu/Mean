const express = require('express') ;
const cors = require('cors');
const app = express();

//Declarar rutas de api

const estudianteRutas = require('./rutas/estudianteRuta') ;

// MIDDLEWARE

app.use(express.json()) ;
app.use(cors());

// Consumo de rutas
app.use('/api',estudianteRutas);

module.exports = app;
