import './Styles.scss'

// eslint-disable-next-line react/prop-types
const Square = ({value, onClick}) => {
  return (
    <div>
        <button className="square" onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square
