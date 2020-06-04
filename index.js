const mongoose = require('mongoose') ;

const app = require('./app');

const port = 3000 ;

const URI = 'mongodb://localhost:27017/edubit' ;

mongoose.connect(URI,(err,res)=>{
    if(err){
        console.log('El error es: ' + err) ;
    }else{
        console.log('Felicitacion conexión exitosa!!') ;
        app.listen(port,()=>{
            console.log('El puerto de conexión es: '+ port);
        })
    }
});