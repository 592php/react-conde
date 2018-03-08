import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Login from '../login'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </div>
  )
}
export default App
