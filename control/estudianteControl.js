const Estudiante = require('../modelo/modelo')

// Crear Estudiante

function crearEstudiante(req, res){
    var estudiante = new Estudiante();
    var parametros = req.body;

    estudiante.nombre = parametros.nombre ;
    estudiante.apellido = parametros.apellido ;
    estudiante.edad = parametros.edad ;
    estudiante.correo = parametros.correo;
    estudiante.direccion = parametros.direccion;
    estudiante.telefono = parametros.telefono;
    estudiante.id_curso = parametros.id_curso;

    estudiante.save((err,estudianteNuevo)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!estudianteNuevo){
                res.status(200).send({message:"No fue posible realizar el registro del estudiante"}) ;
            }else{
                res.status(200).send({
                    status: 'Estudiante creado', 
                    estudiante: estudianteNuevo
                });
            }
        }
    })
}

// obtener tarea

function obtenerEstudiante(req,res){    
    Estudiante.find((err,estudianteEncontrado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!estudianteEncontrado){
                res.status(200).send({message:"No fue posible encontrar el estudiante"}) ;
            }else{
                res.status(200).send({
                    status: 'Estudiante encontrado', 
                    estudiante: estudianteEncontrado
                }) ;
            }
        }
    })
    
};

// actualizar tarea

function actualizarEstudiante(req, res){
    var estudianteId = req.params.id ;
    var nuevosDatosEstudiante = req.body;

    Estudiante.findByIdAndUpdate(estudianteId, nuevosDatosEstudiante,(err, estudianteActualizado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!estudianteActualizado){
                res.status(200).send({message:"No fue posible actualizar el estudiante"}) ;
            }else{
                res.status(200).send({
                    status: 'Estudiante actualizado', 
                    estudiante: nuevosDatosEstudiante
                }) ;
            }
        }    
    });
};

// eliminar tarea

function eliminarEstudiante(req,res){
    var estudianteId = req.params.id ;

    Estudiante.findByIdAndDelete(estudianteId,(err,estudianteEliminado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!estudianteEliminado){
                res.status(404).send({message:"No fue posible eliminar el estudiante"}) ;
            }else{
                res.status(200).send({
                    status: 'Estudiante eliminado', 
                    estudiante: estudianteEliminado
                }) ;
            }
        }    
    });
}

// exportamos funciones

module.exports = {
    crearEstudiante,
    obtenerEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
}