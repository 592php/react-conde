import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import Homenav from '../../components/Homenav'
import DataList from '../../components/DataList'
import {  CHANGE_TABS } from '../../store/modules/home'
class Home extends Component {
	changeTab = (type) => {
		this.props.dispatch({ type: CHANGE_TABS,data:type })
  }
  getData(type){

  }
  render() {
    const {home} = this.props
    console.log(this.props,'home')
    return (
      <div className="navbar">
        <Homenav {...home} onClick={this.changeTab} ></Homenav>
        <DataList {...home} ></DataList>
      </div>
    )
  }
}
const mapStateToProps = state => {
	return {
		...state,
	}
}
export default connect(mapStateToProps)(Home)

