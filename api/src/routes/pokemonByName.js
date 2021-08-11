const express = require('express');
const axios = require('axios');
const router = express.Router();
const {Pokemon, Type} = require('../db');
const {API_URL} = process.env;

router.get('/', async (req,res,next) => {

try {
    const name = req.query.name;

    //Primero pido los pokemons que están guardados de manera local, o sea, en mi base de datos pokemon.

    const infoDataBase = await Pokemon.findAll({
        where:{
            name: name
        },
        include : Type
    });    
    if(infoDataBase.length !== 0){ 
        console.log(infoDataBase,'<<<----soy la informacion de la base de datos');
        console.log('----------------------------------------------------')
        const pokemonDataBase = {
            id: infoDataBase[0].id,
            name: infoDataBase[0].name,
            attack: infoDataBase[0].attack,
            defense: infoDataBase[0].defense,
            speed: infoDataBase[0].speed,
            height: infoDataBase[0].height,
            weight: infoDataBase[0].weight,
            types: infoDataBase[0].types.map(type => type.name),
            // sprite:infoDataBase[0].sprite
        }

        res.send(pokemonDataBase);
    } else {
        //Luego, pido la misma información, pero a la API.
        axios.get(`${API_URL}/${name}`).then(response => {
                console.log(name)
            let stats = response.data.stats;
            let hpStat = stats.find(element => element.stat.name === 'hp');
            let attackStat = stats.find(element => element.stat.name === 'attack');
            let defenseStat = stats.find(element => element.stat.name === 'defense');
            let speedStat = stats.find(element => element.stat.name === 'speed');
            let arrayTypes = response.data.types;
            let version = 'generation-v';
            let color = 'black-white';

            res.send({
                id: response.data.id,
                name: response.data.name,
                hp: hpStat.base_stat,
                attack: attackStat.base_stat,
                defense: defenseStat.base_stat,
                speed: speedStat.base_stat,
                height: response.data.height,
                weight: response.data.weight,
                types: arrayTypes.map(type => type.type.name),
                sprite: response.data.sprites.versions[version][color].animated.front_default
            })}, () => {res.status(404).send('Pokemon dont found')});

}
    
} catch (error) {
    next(error);
}
});

module.exports = router;

