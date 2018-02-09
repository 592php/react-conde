import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Login from '../login'

const App = () => (
  <div>
    <Route exact path='/' component={Home} />
    <Route exact path='/about-us' component={About} />
    <Route exact path='/login' component={Login} />
  </div>
)

export default App
