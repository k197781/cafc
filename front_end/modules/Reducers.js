const initialState = {
  images: []
}

export default function reducers(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_IMAGES':
      return Object.assign({}, state, {
        images: action.images
      })
    default:
      return state
  }
}
