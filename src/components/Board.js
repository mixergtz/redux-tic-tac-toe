import React, { PropTypes } from 'react'
import Square from './Square'

class Board extends React.Component {
  renderSquare (i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onSquareClick(i)} winner={this.props.winner_combination.includes(i)} />
  }
  render () {
    let rows = []
    for (let i = 0; i <= 6; i += 3) {
      rows.push(<div className='board-row' key={i}>
                {[...Array(3)].map((x, j) =>
                  <span key={i + j}>{this.renderSquare(i + j)}</span>
                )}
      </div>)
    }

    return (
      <div>
        <div className='status'></div>
        {rows}
      </div>
    )
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    winner: PropTypes.bool.isRequired
  })).isRequired,
  onSquareClick: PropTypes.func.isRequired
}

export default Board
