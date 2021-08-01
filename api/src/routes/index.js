const { Router } = require('express');
const router = Router();

const allPokemons = require('./allPokemons');
const pokemonById = require('./pokemonById');
const pokemonByName = require('./pokemonByName');
const types = require('./types');

router.use('/pokemons', allPokemons);
router.use('/pokemons/search', pokemonByName);
router.use('/pokemons', pokemonById);
router.use('/types', types);



module.exports = router;
