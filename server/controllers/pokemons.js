/* eslint-disable new-cap */

import express from 'express';
import Pokemon from '../models/pokemon';
import passport from 'passport';
const router = module.exports = express.Router();
const auth = passport.authenticate('jwt', { session: false });

// index
router.get('/', auth, (req, res) => {
  Pokemon.find().exec((err, pokemons) => {
    res.send({ pokemons });
  });
});

// create
router.post('/', auth, (req, res) => {
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
