/*
 * action types
 */

export const SELECT_SQUARE = 'SELECT_SQUARE'
export const MOVES_ORDER = 'MOVES_ORDER'
export const GO_TO_MOVE = 'GO_TO_MOVE'

/*
 * action creators
 */

export function selectSquare (index) {
  return { type: SELECT_SQUARE, index }
}

export function changeMovesOrder () {
  return { type: MOVES_ORDER }
}

export function goToMove (step) {
  return { type: GO_TO_MOVE, step }
}
