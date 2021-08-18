/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  hp: 50,
  attack: 50
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

  describe('GET /pokemons/search?name="..."', () => {
    it('should get 200', () =>
      agent.get('/pokemons/search?name=Pikachu').expect(200)
    );
  });

  describe('GET /pokemons/:id', () => {
    it('should get an object ', async () => {
      let pokemon = await Pokemon.findAll({where : {name : 'Pikachu'}})
      let id = pokemon[0].id;
     await agent.get(`/pokemons/${id}`).then( element => {
        console.log(element.body)
        expect(element.body).to.deep.equal({
          id: id,
          name: 'PIKACHU',
          hp: 50,
          attack: 50,
          defense: null,
          height: null,
          speed: null,
          sprite: null,
          types: [],
          weight:null
        })
    })
    });
  });
});
