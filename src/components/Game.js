import React from 'react'
import Board from './Board'
import { calculateWinner } from '../utils/utils.js'

class Game extends React.Component {
  render () {
    const history = this.props.history
    const current = history[this.props.stepNumber]
    const winner = calculateWinner(current.squares)
    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game Start'
      return (
        <li key={move} className={(this.props.stepNumber === move ? 'current' : '')}>
          <a href='#' onClick={() => this.props.jumpTo(move)}>{desc}</a>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner['winner']
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O')
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onSquareClick={(i) => this.props.onSquareClick(i)}
            winner_combination={(winner ? winner['winner_combination'] : [])}
          />
        </div>
        <div className='game-info'>
          <a href='#' onClick={() => this.props.sortMoves()}>Sort order</a>
          <div>{status}</div>
          <ol>{this.props.movesAscOrder ? moves : moves.reverse()}</ol>
        </div>
      </div>
    )
  }
}

export default Game
