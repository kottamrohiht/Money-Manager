import './index.css'

const MoneyDetails = props => {
  const {moneyHistoryList} = props

  const getSum = type => {
    let totalIncome = 0
    let totalExpanses = 0
    moneyHistoryList.map(each => {
      if (each.activeOption === 'INCOME') {
        totalIncome += parseInt(each.userAmount)
        return ''
      }
      totalExpanses += parseInt(each.userAmount)
      return ''
    })

    if (type === 'INCOME') {
      return totalIncome
    }
    return totalExpanses
  }

  const getIncome = getSum('INCOME').toString()
  const getExpanses = getSum('EXPENSES').toString()
  const balance = (getIncome - getExpanses).toString()

  return (
    <div className="main-money-container">
      <div className="money-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-img"
          alt="balance"
        />
        <div className="your-balance-container">
          <p className="para"> Your Balance </p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="money-details-container container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-img"
          alt="income"
        />
        <div className="your-balance-container">
          <p className="para"> Your Income </p>
          <p data-testid="incomeAmount" className="amount">
            Rs {getIncome}
          </p>
        </div>
      </div>

      <div className="money-details-container container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-img"
          alt="expenses"
        />
        <div className="your-balance-container">
          <p className="para"> Your Expenses </p>
          <p data-testid="expensesAmount" className="amount">
            Rs {getExpanses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
