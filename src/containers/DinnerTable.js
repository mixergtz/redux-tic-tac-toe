import { connect } from 'react-redux'
import { selectSquare, goToMove, changeMovesOrder } from '../actions/index.js'
import Game from '../components/Game'

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (id) => {
      dispatch(selectSquare(id))
    },
    jumpTo: (step) => {
      dispatch(goToMove(step))
    },
    sortMoves: () => {
      dispatch(changeMovesOrder())
    }
  }
}

const DinnerTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default DinnerTable
