import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import MiniRefresh from '../minirefresh'
class DataList extends Component {
  render() {
    const { options,data,onPullingDown,onPullingUp } = this.props;
    return (
      <section className="scroll-list">
        <MiniRefresh
          options={options}
          pullingDown={onPullingDown}
          pullingUp={onPullingUp}
          ref={child => {
            this.minirefresh = child
          }}
        >
          <ul className="posts-list">
            {data.map((item,index) => (
              <li key={index}>
                <Link to={`/detailes/${item.id}`}>
                  <h3 title="置顶" className="top">
                    {item.title}
                  </h3>
                  <div className="content-t">
                    <img
                      src={item.author.avatar_url}
                      alt={item.title}
                      className="avatar"
                    />
                    <div className="info">
                      <p>
                        <span className="name">{item.author.loginname}</span>
                        <span className="status">
                          <b>{item.reply_count}</b>/{item.visit_count}
                        </span>
                      </p>
                      <p>
                        <time>3天前</time>
                        <time>19小时前</time>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </MiniRefresh>
      </section>
    )
  }
}
export default DataList

// <li v-for="item in datalist" :key="item.id">
// <router-link :to="{name:'detailes',params:{id:item.id}}">
// <h3 v-text="item.title" :className="getTabInfos(item.tab, item.good, item.top, true)" :title="getTabInfos(item.tab, item.good, item.top, false)">
// </h3>
// <div className="content-t">
//   <img className="avatar" :src="item.author.avatar_url" />
//   <div className="info">
//     <p>
//       <span className="name">{{item.author.loginname}}</span>
//       <span className="status" v-if="item.reply_count > 0">
//                   <b>{{item.reply_count}}</b>
//                  /{{item.visit_count}}
//                                       </span>
//     </p>
//     <p>
//       <time>{{item.create_at | getLastTimeStr(true) }}</time>
//       <time>{{item.last_reply_at |getLastTimeStr(true) }}</time>
//     </p>
//   </div>
// </div>
// </router-link>
// </li>
