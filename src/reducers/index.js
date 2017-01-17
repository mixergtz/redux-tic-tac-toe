import { SELECT_SQUARE, MOVES_ORDER, GO_TO_MOVE } from '../actions/index.js'
import { calculateWinner } from '../utils/utils.js'

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  movesAscOrder: true,
  xIsNext: true,
  stepNumber: 0
}

function ticTacToeApp (state = initialState, action) {
  switch (action.type) {
    case MOVES_ORDER:
      return Object.assign({}, state, {
        movesAscOrder: !state.movesAscOrder
      })

    case GO_TO_MOVE:
      return Object.assign({}, state, {
        history: state.history.slice(0, action.step + 1),
        stepNumber: action.step,
        xIsNext: (action.step % 2) ? false : true
      })

    case SELECT_SQUARE:
      const history = state.history.slice(0, state.stepNumber + 1)
      const current = history[state.stepNumber]
      const squares = current.squares.slice()
      if (calculateWinner(squares) || squares[action.index]) {
        return state
      }
      squares[action.index] = state.xIsNext ? 'X' : 'O'
      return Object.assign({}, state, {
        history: [
          ...state.history,
          {
            squares: squares
          }
        ],
        xIsNext: !state.xIsNext,
        stepNumber: history.length
      })

    default:
      return state
  }
}

export default ticTacToeApp
