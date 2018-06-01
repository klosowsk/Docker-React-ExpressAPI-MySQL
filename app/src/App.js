import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:  []
     };
  }

  componentDidMount = () => {
    const url = 'http://localhost:3001/users';
    fetch(url)
      .then(res => res.json())
      .then( data => {
        this.setState({users: data})
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Docker+React+MySQL+ExpressAPI</h1>
        </header>
        <p className="App-intro">
          <code>To acccess your API, check localhost:3001 or the api folder.</code>
        </p>
        <p className="App-intro">
          <code>To acccess your MySQL database via phpMyAdmin access localhost:3002.</code>
        </p>
        <p className="App-intro">
          <code>Test data loaded from API:</code>
        </p>
        <div className="" >
          <table className="Table">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User name</th>
                </tr>
            </thead>
            <tbody>
            { this.state.users.map( user => 
              <tr>
                <td> {user.id} </td>
                <td> {user.name}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default App;
