import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#bf0603',
  textDecoration: 'none',
  color: 'white',
}

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ marginTop: '1.75%', marginLeft: '87%' }}>
        <NavLink
          to='/login'
          exact
          style={link}
          activeStyle={{ backgroundColor: '#8D0801', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}
        >
          Login
        </NavLink>
        <NavLink
          to='/sign-up'
          exact
          style={link}
          activeStyle={{ backgroundColor: '#8D0801', borderWidth: 1, borderColor: 'black', borderStyle: 'solid' }}
        >
          Sign Up
        </NavLink>

      </div>
    )
  }
}
