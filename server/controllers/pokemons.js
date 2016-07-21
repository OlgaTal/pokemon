/* eslint-disable new-cap */

import express from 'express';
import Pokemon from '../models/pokemon';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Pokemon.find().exec((err, pokemons) => {
    res.send({ pokemons });
  });
});

// create
router.post('/', (req, res) => {
  Pokemon.create(req.body, (err, pokemon) => {
    res.send({ pokemon });
  });
});

// router.post('/', (req, res) => {
//   const pokemon = new Pokemon(req.body);
//   pokemon.save(() => {
//     res.send({ pokemon });
//   });
// });
