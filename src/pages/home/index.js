import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import Homenav from '../../components/Homenav'
import DataList from '../../components/DataList'
import Loading from '../../components/Loading'
import {
  CHANGE_TABS,
  SET_DATA,
  PAGER_ESET,
  ADD_PAGER,
} from '../../store/modules/home'
import service from '../../api'
class Home extends Component {
  state = {
    options: {
      container: '.minirefresh-wrap',
      up: {
        isAuto: false,//是否直接翻页
        loadFull: {
          isEnable: true,
        },
      },
    },
    listData: [],
    once: true,
    isLoading: false,
  }
  changeTab = type => {
    this.props.dispatch({
      type: CHANGE_TABS,
      data: type,
    })
    this.createData(true)
  }
  componentWillMount() {
    this.createData()
  }
  onPullingDown = () => {
    //上拉刷新
    setTimeout(() => {
      this.createData(true)
      this.minirefresh.minirefresh.endDownLoading(true)
    }, 500)
  }
  onPullingUp = () => {
    //下拉加载更多
    setTimeout(() => {
      this.props.dispatch({
        type: ADD_PAGER,
      })
      this.createData()
      let status = this.props.home.data % 10
      this.minirefresh.minirefresh.endUpLoading(status)
    }, 1000)
  }
  createData = isReset => {
    //加载数据
    if (isReset) {
      this.props.dispatch({
        type: PAGER_ESET,
      })
    }
    this.setState({
      isLoading: true,
    })
    let data = {
      page: this.props.home.currentPage,
      limit: this.props.home.pageSize,
      tab: this.props.home.tab,
    }
    service.getList(data).then(res => {
      this.props.dispatch({
        type: SET_DATA,
        data: res.data,
      })
      this.setState({
        isLoading: false,
      })
      return res.data
    })
    // return res
  }
  render() {
    const { home } = this.props
    return (
      <div className="navbar">
        <Homenav {...home} onClick={this.changeTab} />
        <DataList
          {...home}
          onPullingDown={this.onPullingDown}
          onPullingUp={this.onPullingUp}
          ref={child => {
            this.minirefresh = child
          }}
          options={this.state.options}
        />
        <Loading loading={this.state.isLoading} />
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
