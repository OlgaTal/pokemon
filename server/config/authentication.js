import passport from 'passport';
import User from '../models/user';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    User.findOne({ email }).populate('pokemon').exec((err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      return done(null, user);
    });
  }
));

// passport.use(new LocalStrategy(
//   (email, password, done) => {
//     User.findOne({ email }, (err, user) => {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect email.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
