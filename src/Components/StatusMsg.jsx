const StatusMsg = ({ winner, squares, nextPlayer}) => {
    let squaresFull = squares.every(squareVal => squareVal !== null)
    let player = nextPlayer?'X':'O'
    const statusMsg = ()=>{
        if(winner){
            return <div>Winner is {winner}</div>
        }
        if(!winner && squaresFull){
            return <div>Game Draw</div>
        }
        if(!winner && !squaresFull)
          return <div>Next is {player} turn</div>
        return null
    }
  return (
    <div><h2>{statusMsg()}</h2></div>
  )
}

export default StatusMsg
