import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  const button = isActive ? 'change-color' : 'button'

  return (
    <li className="tabs-list-item">
      <button type="button" className={button} onClick={onClickTabItem}>
        {displayText}
      </button>
      {isActive && <hr className="line" />}
    </li>
  )
}

export default TabItem
