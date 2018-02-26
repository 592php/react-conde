import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from '../home'
// import About from '../about'
import Login from '../login'
import { bindActionCreators } from 'redux'
// <Route exact path='/' component={Home} />
// <Route exact path='/about-us' component={About} />
const App = (pro) => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({}, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
