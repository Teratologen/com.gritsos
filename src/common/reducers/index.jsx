export default function glassMooving(state = false, action) {
  switch (action.type) {
    case 'GRAB':
      return {
        grabbed: true
      }
    case 'MOVE':
      return {
        xPosition: action.xPos,
        yPosition: action.yPos
      }
    case 'RELEASE':
      return {
        grabbed: false
      }
    default:
      return state
  }
}
