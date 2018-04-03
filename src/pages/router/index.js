import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Detalies from '../detalies'
import Login from '../login'
const App = () => {
  return (
    <div className="apps">
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/detailes/:id' component={Detalies} />
    </div>
  )
}
export default App
