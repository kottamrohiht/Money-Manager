import './index.css'

const TransactionItem = props => {
  const {item, deleteSelectedItem} = props
  const {id, userTitle, userAmount, activeOption} = item

  const onClickDelete = () => {
    deleteSelectedItem(id)
  }

  const incomeType = activeOption === 'INCOME' ? 'Income' : 'Expanses'
  const deleteIcon =
    'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png'

  return (
    <li>
      <hr className="hr-line" />
      <div className="list-item-container">
        <p className="title-name"> {userTitle} </p>
        <p className="title-name"> {userAmount} </p>
        <p className="title-name"> {incomeType} </p>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickDelete}
        >
          <img src={deleteIcon} className="delete-icon" alt="delete" />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
