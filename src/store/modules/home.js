export const CHANGE_TABS = 'CHANGE_TABS'
export const GETLIST_DATA = 'GETLIST_DATA'
export const actions = {
  changeTabs: (data) => {
    return {
      type: CHANGE_TABS,
      data: data
    }
  },
  getListData: (data) => {
    return {
      type: GETLIST_DATA,
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
  [GETLIST_DATA]: (state, action) => {
  console.log(state,'state')
  console.log(action,'action')
    return {
      ...state,
      datalist: action.data
    }
  }
}
const initialState = {
  tab: "all",
  datalist: [],
  navlist:[
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
