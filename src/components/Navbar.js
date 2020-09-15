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
      <div style={{ marginTop: '1.5%', marginLeft: '2.5%' }}>
        <NavLink
          to='/'
          exact
          style={link}
          activeStyle={{ backgroundColor: '#8D0801' }}
        >
          Menu
        </NavLink>

      </div>
    )
  }
}
