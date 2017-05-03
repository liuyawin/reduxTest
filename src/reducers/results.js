const initialState = [
  {
    result: '初始要有一条result',
    id: 0
  }
]

export default function results(state = initialState, action) {
  console.log("进入reducer")
  console.log(action)
  switch (action.type) {
    case 'AJAXTEST':
      {
        console.log("进入reducer AJAXTEST")
        return [
          {
            id:state.reduce((maxId, result) => Math.max(result.id, maxId), -1) + 1,
            result: action.result
          },
          ...state
        ]
      }

    default:
      return state
  }
}
