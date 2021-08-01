const express = require('express');
const axios = require('axios');
const router = express.Router();
const {Pokemon, Type} = require('../db');
const {API_URL} = process.env;

router.get('/', async (req,res,next) => {

try {
    const name = req.query.name;
    console.log(name)
    console.log('----------------------------------------------------')

    //Primero pido los pokemons que están guardados de manera local, o sea, en mi base de datos pokemon.

    const infoDataBase = await Pokemon.findAll({
        where:{
            name: name
        },
        include : Type
    });
    console.log(infoDataBase,'<<<----soy la informacion de la base de datos');
    console.log('----------------------------------------------------')
    if(infoDataBase.length !== 0){
        res.send(infoDataBase);
    } else {
        //Luego, pido la misma información, pero a la API.
        axios.get(`${API_URL}/${name}`).then(response => {

            let stats = response.data.stats;
            let hpStat = stats.find(element => element.stat.name === 'hp');
            let attackStat = stats.find(element => element.stat.name === 'attack');
            let defenseStat = stats.find(element => element.stat.name === 'defense');
            let speedStat = stats.find(element => element.stat.name === 'speed');
            let arrayTypes = response.data.types;
            
            let arrayNamesTypes = [];
            arrayTypes.map(elemento => {arrayNamesTypes.push(elemento.type.name)});
            
            res.send({
                id: response.data.id,
                name: response.data.name,
                hp: hpStat.base_stat,
                attack: attackStat.base_stat,
                defense: defenseStat.base_stat,
                speed: speedStat.base_stat,
                height: response.data.height,
                weight: response.data.weight,
                types: arrayNamesTypes
            })}, () => {res.status(404).send('Pokemon dont found')});

}
    
} catch (error) {
    next(error);
}
});

module.exports = router;

