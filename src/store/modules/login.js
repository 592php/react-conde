export const DECREMENT_REQUESTED = 'DECREMENT_REQUESTED'
export const INCREMENT_REQUESTED = 'INCREMENT_REQUESTED'

export const actions = {
  decrement: () => {
    return {
      type: DECREMENT_REQUESTED
    }
  },
  increment: (data) => {
    return {
      type: INCREMENT_REQUESTED,
      data: data
    }
  }
}
const ACTION_HANDLERS = {
  [DECREMENT_REQUESTED]: (state, action) => {
    return {
      ...state,
      count: --state.count
    }
  },
  [INCREMENT_REQUESTED]: (state, action) => {
    return {
      ...state,
      count: ++state.count
    }
  }
}
const initialState = {
  count: 1
}
export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  let res = handler ? handler(state, action) : state
  // console.log(res, 'action state')
  return res
}
