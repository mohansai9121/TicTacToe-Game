
const History = ({moves}) => {
  return (
    <div>
      <h2 className={!moves?'startGame':''}>Start playing Game</h2>
      <h3>Number of moves are:{moves}</h3>
    </div>
  )
}

export default History
