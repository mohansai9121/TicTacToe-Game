import './Styles.scss'

// eslint-disable-next-line react/prop-types
const Square = ({value, onClick}) => {
  return (
    <div>
        <button className="square" onClick={onClick}><span className={(value==='X')?'redx':'greeno'}>{value}</span></button>
    </div>
  )
}

export default Square
