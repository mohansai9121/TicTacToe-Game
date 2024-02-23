import Square from "./Square"
import { useState } from "react"
import './Styles.scss'
import { checkWinner } from "./winner"
import StatusMsg from "./StatusMsg"
import History from "./History"
const newBoard = [{squares:Array(9).fill(null), isX:true}]
const Board = () => {
  let [history, setHistory] = useState(newBoard)
  //let [squares, setSquares] = useState(Array(9).fill(null))
  //let [isX, setIsX] = useState(true)
  let [move, setMove] = useState(0)
  let {squares, isX} = history[move]
  let winnerIs = checkWinner(squares)
  
  const squareHandler = (position)=>{
    var currentMove = history[history.length-1]
    if(currentMove.squares[position] || winnerIs){
      return;
    }
    setHistory((currentHistory)=>{
      let currentMove = currentHistory[currentHistory.length-1]
      const nextSquares = currentMove.squares.map((squareValue, p)=>{
        if(position === p){
          return isX? 'X': 'O'
        }
        return squareValue
      })
      return currentHistory.concat({
        squares: nextSquares,
        isX:!currentMove.isX
      })
    })
    setMove(move=>move+1)
  }
  console.log(history)
  const renderSquares = (pos)=>{
    return <Square value={squares[pos]} onClick={()=>{
      squareHandler(pos)
    }}/>
  }
  const newGame = ()=>{
    setHistory(newBoard)
    setMove(0)
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
      </div><br></br>
      <button onClick={newGame} className={`newGame ${winnerIs? 'active':''}`}>New game</button>
      <History moves={move}/>
    </div>
  )
}

export default Board
