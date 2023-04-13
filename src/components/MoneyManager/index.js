import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    userTitle: '',
    userAmount: '',
    moneyHistoryList: [],
    activeOption: transactionTypeOptions[0].optionId,
  }

  deleteSelectedItem = id => {
    const {moneyHistoryList} = this.state
    const filteredItems = moneyHistoryList.filter(each => each.id !== id)

    this.setState({moneyHistoryList: filteredItems})
  }

  onChangeSelect = event => {
    this.setState({activeOption: event.target.value})
  }

  titleInput = event => {
    this.setState({userTitle: event.target.value})
  }

  amountInput = event => {
    this.setState({userAmount: event.target.value})
  }

  onSubimtForm = event => {
    event.preventDefault()
    const {userTitle, userAmount, activeOption} = this.state

    const userObj = {
      id: uuid(),
      userTitle,
      userAmount,
      activeOption,
    }

    this.setState(prevState => ({
      moneyHistoryList: [...prevState.moneyHistoryList, userObj],
      userTitle: '',
      userAmount: '',
    }))
  }

  renderMoneymanagerView = () => {
    const {userTitle, userAmount, activeOption, moneyHistoryList} = this.state

    return (
      <div className="app-container">
        <div className="name-container">
          <h1 className="name"> Hi, Richard </h1>
          <p className="greet">
            Welcome back to your <span className="span-el">Money Manager</span>
          </p>
        </div>

        <div className="money-detailsList-container">
          <MoneyDetails moneyHistoryList={moneyHistoryList} />
        </div>

        <div className="form-history-container">
          <form onSubmit={this.onSubimtForm} className="input-el-container">
            <h1 className="add-transaction"> Add Transaction </h1>
            <label htmlFor="title" className="title-el">
              TITLE
            </label>
            <br />
            <input
              id="title"
              type="text"
              value={userTitle}
              className="input-el"
              onChange={this.titleInput}
              placeholder="TITLE"
            />
            <br />

            <label htmlFor="amount" className="title-el">
              AMOUNT
            </label>
            <br />
            <input
              id="amount"
              type="text"
              value={userAmount}
              className="input-el"
              onChange={this.amountInput}
              placeholder="AMOUNT"
            />
            <label htmlFor="type" className="title-el">
              TYPE
            </label>
            <select
              value={activeOption}
              onChange={this.onChangeSelect}
              className="input-el"
            >
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>

            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          <div className="history-container">
            <h1 className="history-heading"> History </h1>
            <div className="history-list-item-container">
              <div className="history-inner-container">
                <p className="title-para"> Title </p>
                <p className="title-para"> Amount </p>
                <p className="title-para"> Type </p>
              </div>

              <ul className="history-list-container">
                {moneyHistoryList.map(each => (
                  <TransactionItem
                    key={each.id}
                    item={each}
                    deleteSelectedItem={this.deleteSelectedItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.renderMoneymanagerView()
  }
}

export default MoneyManager
