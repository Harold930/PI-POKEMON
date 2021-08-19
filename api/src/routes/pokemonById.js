const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Op } = require('sequelize');
const {Pokemon, Type} = require('../db');
const {API_URL} = process.env;

router.get('/:id', async (req,res,next) => {

try {
        const id = req.params.id;

        if(id.length > 2 ){

            const infoDataBase = await Pokemon.findByPk(id, {include : Type});

            const pokemonDataBase = {
                id: infoDataBase.id,
                name: infoDataBase.name.toUpperCase(),
                attack: infoDataBase.attack,
                hp: infoDataBase.hp,
                defense: infoDataBase.defense,
                speed: infoDataBase.speed,
                height: infoDataBase.height,
                weight: infoDataBase.weight,
                sprite: infoDataBase.sprite,
                types: infoDataBase.types.map(type => type.name),
            }
            return pokemonDataBase ? res.send(pokemonDataBase) : res.status(404); 
        } else {

            const infoApi = await axios.get(`${API_URL}/${id}`);

            let stats = infoApi.data.stats;

            let hpStat = stats.find(element => element.stat.name === 'hp');
            let attackStat = stats.find(element => element.stat.name === 'attack');
            let defenseStat = stats.find(element => element.stat.name === 'defense');
            let speedStat = stats.find(element => element.stat.name === 'speed');
            let arrayTypes = infoApi.data.types;
            let version = 'generation-v';
            let color = 'black-white';

            return infoApi ?  res.send({
                id: infoApi.data.id,
                sprite: infoApi.data.sprites.versions[version][color].animated.front_default,
                name: infoApi.data.name.toUpperCase(),
                hp: hpStat.base_stat,
                attack: attackStat.base_stat,
                defense: defenseStat.base_stat,
                speed: speedStat.base_stat,
                height: infoApi.data.height,
                weight: infoApi.data.weight,
                types: arrayTypes.map(type => type.type.name),
            }) : res.status(404);
    }
} catch (error) {
    next(error);
}

});

 module.exports = router;