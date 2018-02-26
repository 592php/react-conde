import React from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
import { createStore } from 'redux'
import login from '../../store/modules/login'
let store = createStore(login)
// console.log(store)
const Login = (props) => {
  console.log(props, 'props')
  let set = () => {
    store.dispatch({type: 'GO_LOGIN'})
  }
  return (
    <div className='login'>
      <div className='title' />
      <div className='coordinates-icon'>
        <div className='coordinates topAct'>
          <img src={logo} alt='logo' />
        </div>
        <div className='circle-1-1 circle-show-2' />
        <div className='circle-2-2 circle-show-1' />
        <div className='circle-3-3 circle-show' />
      </div>
      <div className='login-form'>
        <form action='#'>
          <div className='user-pasw common-div'>
            <span className='pasw-icon common-icon'>
              <i className='iconfont  icon-miyao' />
            </span>
            <p>Count: {store.login}</p>
            <input type='password' name='password' placeholder='accesstoken' />
          </div>
          <div className='login-btn' onClick={set} >
            登录
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
