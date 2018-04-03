import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import './index.css'
import service from '../../api'
class Detalies extends Component {
  state ={
    topic:null
  }
  componentWillMount() {
    service.detailes(this.props.match.params.id).then(res => {
     this.setState({
       topic:res.data
     })
    })
  }
  
  render() {
    // let {match} = this.props
    let {topic} = this.state  
    //.match.params.id
    return (
      <div className="page">
      {topic && <div className="showMenu">
          <h2 className="topic-title">{topic.title}</h2>
          <section className="author-info">
        <img className="avatar" alt={topic.title} src={topic.author.avatar_url} />
        <div className="col">
          <span>{topic.author.loginname}</span>
        </div>
        <div className="right">
          <span className="tag">
          </span>
        </div>
      </section>
      <section className='markdown-body topic-content' dangerouslySetInnerHTML={{__html: topic.content}}>
      </section>
        </div>
      } 
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    ...state,
  }
}
export default connect(mapStateToProps)(Detalies)
