import React, { Component } from 'react';

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleLogin = () => {
    alert('login')
  }

  render() {
    return (
      <div style={{ margin: 'auto', width: '100%', textAlign: 'center' }}>
        <h1>Login</h1>
        <form>
          <label>
            Username<br />
            <input></input>
          </label>
          <br />
          <label>
            Password<br />
            <input></input>
          </label><br /><br />
          <button onClick={this.handleLogin}>Log In</button>
        </form>
      </div>
    )
  }

}