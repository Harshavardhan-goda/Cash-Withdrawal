/* eslint-disable react/button-has-type */
import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const onTotal = () => {
    balanceDeduction(value)
  }

  return (
    <li>
      <div>
        <button className="button" onClick={onTotal}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
