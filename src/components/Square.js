import React, { PropTypes } from 'react'

const Square = ({ onClick, value, winner }) => (
  <button
    className={'square' + (winner ? ' winner' : '')}
    onClick={onClick}
  >
    {value}
  </button>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  winner: PropTypes.bool.isRequired
}

export default Square
