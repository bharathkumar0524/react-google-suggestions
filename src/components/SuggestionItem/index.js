// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onArrowClick} = props
  const {suggestion} = suggestionItem

  const onArrowButtonClick = () => {
    onArrowClick(suggestion)
  }
  return (
    <li className="item">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={onArrowButtonClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
