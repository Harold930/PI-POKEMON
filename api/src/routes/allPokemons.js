const express = require('express');
const axios = require('axios');
const router = express.Router();
const { Op } = require('sequelize');
const {Pokemon, Type} = require('../db');
const {API_URL} = process.env;

router.get('/', async (req,res,next) => {

try {
    const infoDataBase = await Pokemon.findAll({include : Type});
    console.log(infoDataBase,'<<<------------------Soy todos las pokemones creados y guardados en la base de datos.');
    console.log('-----------------------------------------------');
    let responseDataBase = [];
    for(let i = 0; i < infoDataBase.length; i++){
        responseDataBase.push({
            id: infoDataBase[i].id,
            name: infoDataBase[i].name.toUpperCase(),
            sprite: infoDataBase[i].sprite,
            types: infoDataBase[i].types.map(type => type.name), //Acá primero voy a tener que modificar como viene la información. 
            attack: infoDataBase[i].attack
        })
    }
    const infoApi = await axios.get(`${API_URL}?limit=40`);
    // console.log(infoApi.data.results,'<<<------------------Soy los primeros 40 pokemons que le pido a al api.');
    console.log('-----------------------------------------------');
    let responseApi = [];
    for(let i = 0;i < infoApi.data.results.length; i++){

        let info = await axios.get(infoApi.data.results[i].url);
        // console.log(info);
        let sprite = info.data.sprites.front_default;
        let arrayTypes = info.data.types;
        let attackStat = info.data.stats.find(element => element.stat.name === 'attack');

        // let arrayNamesTypes = [];
        // arrayTypes.map(elemento => {arrayNamesTypes.push(elemento.type.name)});

        // responseApi.push({
        //     id: info.data.id,
        //     name: infoApi.data.results[i].name,
        //     sprite: sprite,
        //     types: arrayNamesTypes
        // });

        responseApi.push({
            id: info.data.id,
            name: infoApi.data.results[i].name.toUpperCase(),
            sprite: sprite,
            types: arrayTypes.map(el => el.type.name),
            attack: attackStat.base_stat
        });


    }
    let response = responseDataBase.concat(responseApi);
    res.send(response);
} catch (error) {
    next(error);
}

});

module.exports = router;