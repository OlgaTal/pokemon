/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = { error: [], user: [] };
  }

  register(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    axios.post('/api/register', { email, password })
    .then(() => {
      browserHistory.push('/login');
    })
    .catch(() => {
      // notify user
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
            <button onClick={this.register} type="submit" className="btn btn-default">Save</button>
          </form>
        </div>
        <div className="col-xs-9">
        </div>
      </div>
    );
  }
}
