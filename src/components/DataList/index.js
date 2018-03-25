import React, { Component } from 'react'
import './index.css'
import MiniRefresh from '../minirefresh';
class DataList extends Component {
  state ={
    options: {
      container: '.minirefresh-wrap',
      up: {
          isAuto: true,
          loadFull: {
              isEnable: true,
          },
      },
  },
  }
  onPullingDown() {
    setTimeout(() => {
      console.log('pulling down and load data');

      // const newList = this.createTestData(10, true);

      // this.setState({
      //     listData: newList,
      // });
      this.minirefresh.endDownLoading(true);
    }, 500);
  }
  onPullingUp() {
    setTimeout(() => {
      console.log('pulling up and load data');

      // const newList = this.state.listData.concat(this.createTestData(2));

      // this.setState({
      //     listData: newList,
      // });
      // this.minirefresh.endUpLoading(newList.length >= 20);
    }, 500);
  }
  render() {

    // const { navlist,tab,onClick } = this.props;
    console.log(this.props, 'datlist')
    return (
      <section className="scroll-list">
        <MiniRefresh
          options={this.state.options}
          pullingDown={this.onPullingDown}
          pullingUp={this.onPullingUp}
          ref={(child) => {
            this.minirefresh = child;
          }}
        >
          <ul className="posts-list" >
            <li>
              <a >
                <h3 title="置顶" className="top">为社区做贡献，帮社区写自动化测试代码</h3>
                <div className="content-t">
                  <img src="https://avatars1.githubusercontent.com/u/22312483?v=4&amp;s=120" alt="12313" className="avatar" />
                  <div className="info">
                    <p>
                      <span className="name">imzengyang</span>
                      <span className="status">
                        <b>13</b>/1058</span>
                    </p>
                    <p>
                      <time>3天前</time>
                      <time>19小时前</time>
                    </p>
                  </div>
                </div>
              </a>
            </li>
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