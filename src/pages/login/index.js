import React from 'react'
import './index.less'
import logo from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import { DECREMENT_REQUESTED, INCREMENT_REQUESTED } from '../../store/modules/login'
import { NavBar, Icon,Button } from 'antd-mobile'
//	<i class='iconfont  icon-msnui-tel user-icon'></i>
const Login = props => {
	// console.log(props, 'props')
	let increment = () => {
		props.dispatch({ type: INCREMENT_REQUESTED })
	}
	let decrement = () => {
		props.dispatch({ type: DECREMENT_REQUESTED })
	}
	return (
		<div className="pages">
			<NavBar
        mode="dark"
        icon={<Icon type="left" />}>
				登录
      </NavBar>
      <div className='login'>
				<div className='user'>
           <input type="text" />
        </div>
        <div className='password'>
        <input type="text" />
        </div>
        <Button type="primary" className='sumbit'>登录</Button>
      </div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		...state,
	}
}

export default connect(mapStateToProps)(Login)
