//  1 Requerimos express
const express = require("express");
// requerimos el modelo de usuario
const userSchema = require("../models/user");
// creamos el router
const router = express.Router();

//crear usuario
router.post('/users',(req,res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
})

//traer u optener usuarios
router.get('/users',(req,res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});
//traer u optener usuario especifico
router.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

//actulizar usuario especifico
router.put('/users/:id',(req,res)=>{
    const {id} = req.params;
    const {dni,name,lastName,age,roll,tel,email} = req.body;
    userSchema
        .updateOne({_id: id},{$set:{dni,name,lastName,age,roll,tel,email}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// delete a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .findByIdAndDelete({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



// exportamos
module.exports = router;

