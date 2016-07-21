/* eslint-disable new-cap */

import express from 'express';
import Pokemon from '../models/pokemon';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  console.log('hello');
  Pokemon.find().exec((err, pokemons) => {
    console.log('POKEMON:', pokemons);
    res.send({ pokemons });
  });
});

router.post('/', (req, res) => {
  const pokemon = new Pokemon(req.body);
  pokemon.save(() => {
    res.send({ pokemon });
  });
});
