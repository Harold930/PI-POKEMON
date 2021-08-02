const express = require('express');
const axios = require('axios');
const router = express.Router();
const {Pokemon, Type} = require('../db');


router.post('/',async (req,res,next) => {
try {
    const {name, hp, attack, defense, speed, height, weight, types}  = req.body;
    console.log(req.body)
    await Pokemon.create({
        name, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight
    },{ include: Type})
    res.send('HOLAAAA');
}catch (error) {
    next(error);
}
});

module.exports=router;