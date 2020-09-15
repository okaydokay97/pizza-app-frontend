import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginNav from './components/LoginNav'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'


export default function App() {
  return (
    <Router>
      <div>
        <div className='navigation'>
          <div style={{ borderColor: 'black', borderWidth: '1px', width: '100%', height: 125, borderStyle: 'solid', marginTop: 0, backgroundColor: '#708D81' }} >
            <h1>Mario's Pizzeria</h1>
            <LoginNav />
          </div>
          <div style={{ borderColor: 'black', borderWidth: '1px', width: '100%', height: 65, borderStyle: 'solid', marginTop: 0, backgroundColor: '#F4D58D' }} >
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-up' component={SignUp} />

          </div>
        </div>
      </div>
    </Router>
  );
}
