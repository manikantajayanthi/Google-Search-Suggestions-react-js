import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSearchInput} = props
  const {suggestion} = suggestions

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p>{suggestion}</p>
      <button
        type="button"
        onClick={onClickSuggestion}
        className="button-arrow"
      >
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
