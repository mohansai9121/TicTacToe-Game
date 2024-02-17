import Square from "./Square"
import { useState } from "react"
import './Styles.scss'

const Board = () => {
  let [squares, setSquares] = useState(Array(9).fill(null))
  console.log(squares)
  const squareHandler = (position)=>{
    setSquares((gameSquares)=>{
      return gameSquares.map((squareValue, p)=>{
        if(position === p){
          return 'x'
        }
        return squareValue
      })
    })
  }

  const renderSquares = (pos)=>{
    return <Square value={squares[pos]} onClick={()=>{
      squareHandler(pos)
    }}/>
  }

  return (
    <div className="board">
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
