import React, { Component } from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  increment
} from '../../store/modules/counter'
const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment
    },
    dispatch
  )
const Login = props => (
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
          <p>Count: {props.count}</p>
          <input type='password' name='password' placeholder='accesstoken' />
        </div>
        <div className='login-btn' onClick={props.increment}>
          登录
        </div>
      </form>
    </div>
  </div>
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
