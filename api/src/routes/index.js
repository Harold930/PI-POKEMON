const { Router } = require('express');
const router = Router();

const allPokemons = require('./allPokemons');

router.use('/pokemons', allPokemons);




module.exports = router;
