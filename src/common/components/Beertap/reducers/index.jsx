export default function glassMooving(state = false, action) {
  switch (action.type) {
    case 'GRAB':
      return true
    case 'RELEASE':
      return false
    default:
      return state
  }
}
