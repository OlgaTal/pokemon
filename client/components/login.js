/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = { error: [], user: [] };
  }

  login(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    axios.post('/api/login', { email, password })
    .then((rsp) => {
      localStorage.clear();
      localStorage.setItem('token', rsp.data.token);
      browserHistory.push('/pokemon');
    })
    .catch((err) => {
      // notify user
      console.log('login catch', err);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <form>
            <div className="form-group">
              <label htmlFor="email">User Email</label>
              <input ref="email" type="text" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input ref="password" type="password" className="form-control" id="password" />
            </div>
            <button onClick={this.login} type="submit" className="btn btn-default">Login</button>
          </form>
        </div>
        <div className="col-xs-9">
        </div>
      </div>
    );
  }
}
