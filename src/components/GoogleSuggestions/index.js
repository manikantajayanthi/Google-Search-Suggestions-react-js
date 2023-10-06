import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        <div className="search-container">
          <div className="search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input"
              placeholder="Search Google"
              type="search"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
          </div>
          <ul>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestions={eachSuggestion}
                key={eachSuggestion.id}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
