import React from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
const Login = () => (
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
          <input type='password' name='password' v-model='accesstoken' placeholder='accesstoken' />
        </div>
        <div className='login-btn' >登录</div>
      </form>
    </div>
    <div className='forgets'>
      <router-link to='' />
      <router-link to='/register'>注册账号>></router-link>
    </div>
  </div>
)
export default Login
