//  1 Requerimos express
const express = require("express");
// Requerimos mongoose
const mongoose = require("mongoose");
// Requerimos dotenv para manejar nuesta vrible segura .env
require('dotenv').config();
//importamos las rutas
const userRoutes = require("./routes/user")


//instanciamos el app y ejecutamos express
const app = express();
// definimos puerto
const port = 9000;

//middleware
app.use(express.json())
app.use('/api',userRoutes);


//creamos nustra ruta
app.get('/',(req,res) => {
    res.send('wellcome to my API')
});

// conectamos mongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{console.log("conectado a MONGODB")})
    .catch((error)=>console.error(error))


// escuchamos el servidor y envimos informacion a la consola para confirmar que este encendido
app.listen(port,() => console.log(`server funcionando en la puerta: ${port}`));