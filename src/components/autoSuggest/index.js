import React from "react";
import Autosuggest from "react-autosuggest";
// import { countries } from "./fakedata";

const theme = {
  container: "react-autosuggest__container position-relative form-group",
  containerOpen: "react-autosuggest__container--open",
  input: "react-autosuggest__input form-control",
  inputOpen: "react-autosuggest__input--open",
  inputFocused: "react-autosuggest__input--focused",
  suggestionsContainer:
    "react-autosuggest__suggestions-container position-absolute",
  suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
  suggestionsList: "react-autosuggest__suggestions-list list-group",
  suggestion: "react-autosuggest__suggestion list-group-item",
  suggestionFirst: "react-autosuggest__suggestion--first",
  suggestionHighlighted: "react-autosuggest__suggestion--highlighted active",
  sectionContainer: "react-autosuggest__section-container",
  sectionContainerFirst: "react-autosuggest__section-container--first",
  sectionTitle: "react-autosuggest__section-title",
};
let mk = [];
const getSuggestions = (value) => {
  // console.log(mk,'mkkkkkkkkkk')
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return inputLength === 0
    ? []
    : mk.filter(
        (lang) => lang.title.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => {
  return suggestion.title;
};

const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

// console.log(this.state);
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
      data: [],
    };
    fetch("https://api.bydbyt.com/api/search-campaigns?search=")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result?.result }));
  }

  handleOnChange = (e, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (
    e,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    // console.log("suggestion selected");
  };

  render() {
    const { value, suggestions, data } = this.state;

    const inputProps = {
      placeholder: "Search User",
      value,
      onChange: this.handleOnChange,
    };
    mk = data;
    // console.log(data, "data------------data");
    return (
      <Autosuggest
        theme={theme}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        highlightFirstSuggestion={true}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Hello;
