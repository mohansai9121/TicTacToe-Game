import Square from "./Square"
import { useState } from "react"
import './Styles.scss'
import { checkWinner } from "./winner"
import StatusMsg from "./StatusMsg"

const Board = () => {
  let [squares, setSquares] = useState(Array(9).fill(null))
  let [isX, setIsX] = useState(true)
  let winnerIs = checkWinner(squares)
  
  const squareHandler = (position)=>{
    if(squares[position] || winnerIs){
      return;
    }
    setSquares((gameSquares)=>{
      return gameSquares.map((squareValue, p)=>{
        if(position === p){
          return isX? 'X': 'O'
        }
        return squareValue
      })
    })
    setIsX((valueX)=>!valueX)
  }

  const renderSquares = (pos)=>{
    return <Square value={squares[pos]} onClick={()=>{
      squareHandler(pos)
    }}/>
  }

  return (
    <div className="board">
      <div>
        <h2>Tic Tac Toe</h2>
        <StatusMsg winner={winnerIs} squares={squares} nextPlayer={isX} />
      </div>
      <div className="board-row">
        {renderSquares(0)}
        {renderSquares(1)}
        {renderSquares(2)}
      </div>
      <div className="board-row">
        {renderSquares(3)}
        {renderSquares(4)}
        {renderSquares(5)}
      </div>
      <div className="board-row">
        {renderSquares(6)}
        {renderSquares(7)}
        {renderSquares(8)}
      </div>
    </div>
  )
}

export default Board
