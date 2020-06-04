const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const EstudianteSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    direccion: String,
    telefono: String,
    id_curso: String    
})

module.exports = mongoose.model('Estudiante',EstudianteSchema);