/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { errors: [], pokemons: [] };
  }

  componentDidMount() {
    const authorization = `JWT ${localStorage.getItem('token')}`;
    axios.get('/api/pokemon', { headers: { authorization } })
    .then((rsp) => {
      this.setState({ pokemons: rsp.data.pokemons });
    });
  }

  create(e) {
    e.preventDefault();
    const pokemonname = this.refs.pokemonname.value;
    const imageurl = this.refs.imageurl.value;
    const authorization = `JWT ${localStorage.getItem('token')}`;
    axios.post('/api/pokemon', { headers: { authorization } }, { pokemonname, imageurl })
    .then((rsp) => {
      this.setState({ errors: [], pokemons: [...this.state.pokemon, rsp.data.pokemon] });
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="pokemonname">Pokemon name</label>
                <input ref="pokemonname" type="text" className="form-control" id="pokemonname" />
              </div>
              <div className="form-group">
                <label htmlFor="imageurl">Pokemon image</label>
                <input ref="imageurl" type="text" className="form-control" id="imageurl" />
              </div>
              <button onClick={this.create} type="submit" className="btn btn-default">Save</button>
            </form>
          </div>
          <div className="col-xs-9">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>pokemon name</th>
                  <th>image</th>
                  <th>caught on</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemons.map(p => (
                  <tr key={p._id}>
                    <td>{p.pokemonname}</td>
                    <td><img src={p.imageurl} role="presentation" height="50" /></td>
                    <td>{moment(p.dateCreated).format('MMMM Do YYYY')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-xs-4"></div>
        </div>

      </div>
    );
  }
}
