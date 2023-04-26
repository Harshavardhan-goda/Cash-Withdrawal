import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {total: 2000}

  balanceDeduction = value => {
    this.setState(oldState => ({total: oldState.total - value}))
  }

  render() {
    const {total} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="profile-card">
            <p className="profile-icon">S</p>
            <div className="profile-name">
              <p>Sarah Williams</p>
            </div>
          </div>
          <div className="balance-card">
            <p className="balance-paragraph">Your Balance</p>
            <div>
              <p>{total}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="list-card">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationsList={eachItem}
                  key={eachItem.id}
                  balanceDeduction={this.balanceDeduction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
