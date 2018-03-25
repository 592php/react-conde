import React, { Component } from 'react'
import './index.css'

class Homenav extends Component {
  state = {
    tab: 0
  }
  changeTab = (item,index) => {
    console.log(item, 'index')
    console.log(index, 'index')
    this.setState({ tab: index });
  }

  render() {
    const { navlist,tab,onClick } = this.props;
     console.log(this.props,'propshomevav')
    return (
      <div className="nav-box clearfix">
        <ul className="nav-bar">
          {navlist.map((item, index) => {
            return (
              <li key={index} className={tab === item.type ? "nav-bar-item nav-bar-active" : "nav-bar-item"} onClick={()=>{onClick(item.type)}}>
                {item.title}
              </li>
            )
          })}
        </ul>
      </div >
    )
  }
}
export default Homenav
