export const CHANGE_TABS = 'CHANGE_TABS'
export const PAGER_ESET = 'PAGER_ESET'
export const ADD_PAGER = 'ADD_PAGER'
export const SET_DATA = 'SET_DATA'
export const actions = {
  changeTabs: (data) => {
    return {
      type: CHANGE_TABS,
      data: data
    }
  },
  setData: (data) => {
    return {
      type: SET_DATA,
      data: data
    }
  },
  pagerRest: (data) => {
    return {
      type: PAGER_ESET,
      data: data
    }
  },
  pagerAdd: (data) => {
    return {
      type: ADD_PAGER,
      data: data
    }
  }
}
const ACTION_HANDLERS = {
  [CHANGE_TABS]: (state, action) => {
    return {
      ...state,
      tab: action.data
    }
  },
  [PAGER_ESET]: (state, action) => {
    return {
      ...state,
      currentPage: 1,
      pageSize: 10
    }
  },
  [ADD_PAGER]: (state, action) => {
    return {
      ...state,
      currentPage: ++state.currentPage,
      pageSize: 10
    }
  },
  [SET_DATA]: (state, action) => {
    let data = state.currentPage === 1 ?action.data:action.data.concat(state.data)
    return {
      ...state,
      data: data
    }
  }
}
const initialState = {
  tab: 'all', // 默认
  data: [],
  currentPage: 1,
  pageSize: 10,
  navlist: [
    {
      title: '全部',
      type: 'all'
    },
    {
      title: '精华',
      type: 'good'
    },
    {
      title: '分享',
      type: 'share'
    },
    {
      title: '客户端测试',
      type: 'dev'
    }
  ]

}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  let res = handler ? handler(state, action) : state
  // console.log(res, 'action state')
  return res
}
