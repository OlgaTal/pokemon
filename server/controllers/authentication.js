/* eslint-disable new-cap */

import express from 'express';
import User from '../models/user';
import passport from 'passport';
const router = module.exports = express.Router();

// register
router.post('/register', (req, res) => {
  console.log('register request', req.body);
  User.create(req.body, (err, user) => {
    if (!user) {
      return res.status(400).send();
    }
    return res.status(200).send({ success: 'OK' });
  });
});

// login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  console.log('login request', req.body);
  const token = req.user.token();
  res.status(200).send({ token });
  // });
});
