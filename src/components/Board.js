import React, { useState } from 'react';
import Square from './Square';
import './Board.css'

const Board = (props) => {

  const renderSquare = (index) => {
    return <Square value = {props.squares[index]} onClick = {() => props.handleClick(index)} />; 
  }


  return (
    <div className = "board-wrapper">

        <div className = 'board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className = 'board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className = 'board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>

  )
}

export default Board;