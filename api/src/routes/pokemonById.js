const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Op } = require('sequelize');
const {Pokemon, Type} = require('../db');
const {API_URL} = process.env;

router.get('/:id', async (req,res,next) => {

try {
        const id = req.params.id;
        console.log(id);
        if(id.length > 2 ){
            //si es mayor a 2, busco el pokemon en mi base de datos.
            const infoDataBase = await Pokemon.findByPk(id, {include : Type});
            return infoDataBase ? res.send(infoDataBase) : res.status(404); //De igual manera, fijarme en la data que me viene en los tipos de dieta 
        } else {
            //si es menor a 2, entonces busco el pokemon en la api.
            const infoApi = await axios.get(`${API_URL}/${id}`);

            let stats = infoApi.data.stats;

            let hpStat = stats.find(element => element.stat.name === 'hp');
            let attackStat = stats.find(element => element.stat.name === 'attack');
            let defenseStat = stats.find(element => element.stat.name === 'defense');
            let speedStat = stats.find(element => element.stat.name === 'speed');
            let arrayTypes = infoApi.data.types;

            let arrayNamesTypes = [];
            arrayTypes.map(elemento => {arrayNamesTypes.push(elemento.type.name)});

           return infoApi ?  res.send({
                id: infoApi.data.id,
                name: infoApi.data.name,
                hp: hpStat.base_stat,
                attack: attackStat.base_stat,
                defense: defenseStat.base_stat,
                speed: speedStat.base_stat,
                height: infoApi.data.height,
                weight: infoApi.data.weight,
                types: arrayNamesTypes
            }) : res.status(404);
    }
} catch (error) {
    next(error);
}

});

 module.exports = router;