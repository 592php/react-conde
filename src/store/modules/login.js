export const GO_LOGIN = 'GO_LOGIN'

export const actions = {
  goLogin: (data) => {
    return {
      type: GO_LOGIN,
      data: data
    }
  }
}
const ACTION_HANDLERS = {
  [GO_LOGIN]: (state, action) => {
    console.log(state, 'state')
    return {
      ...state,
      login: !state.login
    }
  }
}
const initialState = {
  login: false
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  let res = handler ? handler(state, action) : state
  // console.log(res, 'action state')
  return res
}
