import './Styles.scss'

// eslint-disable-next-line react/prop-types
const Square = ({value}) => {
  return (
    <div>
        <button className="square">{value}</button>
    </div>
  )
}

export default Square
