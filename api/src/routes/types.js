const express = require('express');
const axios = require('axios');
const router = express.Router();
const {Pokemon, Type} = require('../db');
const {API_URL, API_URL_TYPE} = process.env;


router.get('/',async (req,res,next) =>{
try {
    const types = await axios.get(`${API_URL_TYPE}`);
    console.log(types.data);
    let arrayTypes = [];
    for(let i = 0; i < types.data.results.length; i++){
        Type.findOrCreate({where :{name: types.data.results[i].name}, defaults:{ name :  types.data.results[i].name}});
        arrayTypes.push(types.data.results[i].name);
    }
    res.send(arrayTypes);
} catch (error) {
    next(error);
}
})

module.exports = router;