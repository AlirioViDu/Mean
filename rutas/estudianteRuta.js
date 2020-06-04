const express = require('express') ;
const estudianteControl = require('../control/estudianteControl')

var api = express.Router();

// Ruta agregar tareas
api.post('/',estudianteControl.crearEstudiante);
// Ruta consultar tareas
api.get('/',estudianteControl.obtenerEstudiante);
// Ruta actualizar tareas
api.put('/:id',estudianteControl.actualizarEstudiante);
// Ruta eliminar tareas
api.delete('/:id',estudianteControl.eliminarEstudiante);

module.exports = api ;