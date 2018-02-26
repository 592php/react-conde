export const getActions = (_ID) => {
  const LOAD = _ID + 'LOAD'
  const actions = {
    load: (data) => {
      return {
        type: LOAD,
        data: data
      }
    }
  }
  const actionsHandlers = {
    [LOAD]: (state, action) => {
      return {
        ...state,
        init: action.data
      }
    }
  }
  return {
    actionKey: {
      LOAD
    },
    actions,
    actionsHandlers
  }
}
