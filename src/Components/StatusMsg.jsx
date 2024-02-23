import './Styles.scss'
const StatusMsg = ({ winner, squares, nextPlayer}) => {
    let squaresFull = squares.every(squareVal => squareVal !== null)
    let player = nextPlayer?'X':'O'
    const statusMsg = ()=>{
        if(winner){
            return <div>Winner is <span className={winner==='X'?'redx':'greeno'}>{winner}</span></div>
        }
        if(!winner && squaresFull){
            return <div>Game Draw</div>
        }
        if(!winner && !squaresFull)
          return <div>Next is<span className={nextPlayer?'redx':'greeno'}> {player}</span> turn</div>
        return null
    }
  return (
    <div><h2>{statusMsg()}</h2></div>
  )
}

export default StatusMsg
