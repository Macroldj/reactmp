const initState = {
  count: 2
}

const reducer = (state = initState, action) => {
  console.log("reducer 开始生效")
  switch (action.type) {
    case "ADD_ACTION":
      return {
        count: state.count + action.value
      };
    case "type_action":
      return {
        state
      }
    default:
      return initState;
  }
}

module.exports = {
  reducer
}
