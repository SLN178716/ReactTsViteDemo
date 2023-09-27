export const reducer = (state = 0, action: { type: string; payload: string }) => {
  switch (action.type) {
    // 执行动作add  让state 加1
    case 'add':
      // 返回新的state
      return state + 1
    case 'addN':
      // 返回新的state
      return state + action.payload
    default:
      return state
  }
}
