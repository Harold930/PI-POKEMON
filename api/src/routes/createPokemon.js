const express = require('express');
const axios = require('axios');
const router = express.Router();
const {Pokemon, Type} = require('../db');


router.post('/',async (req,res,next) => {
try {
    const {name, hp, attack, defense, speed, height, weight, types}  = req.body;

   let pokemonCreated =  await Pokemon.create({
        name, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight
    });

    let typesDb = await Type.findAll({
        where :{name: types}
    });

    pokemonCreated.addType(typesDb);

    res.send('Pokemon created succesfully');

}catch (error) {
    next(error);
}
});

module.exports=router;