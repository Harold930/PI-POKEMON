const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
  describe('Create a pokemon succesfully', () => {

    beforeEach(() => Pokemon.sync({ force: true }));

      it('should create a pokemon succesfully and return a object', async () => {
       await Pokemon.create({ 
          name: 'Pikachu',
          hp: 150,
          attack: 150,
          speed: 50,
          height: 200
        });
        let pokemon = await Pokemon.findAll({where: {name : 'Pikachu'}});
       expect(pokemon[0]).to.be.a('object');
      });
    });

});
