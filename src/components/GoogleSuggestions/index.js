// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowClick = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestion-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <ul className="suggestion-container">
            <div className="input-search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-text"
                placeholder="Search Google"
                onChange={this.onChangeInputSearch}
                value={searchInput}
              />
            </div>
            {searchResult.map(each => (
              <SuggestionItem
                suggestionItem={each}
                key={each.id}
                onArrowClick={this.onArrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
