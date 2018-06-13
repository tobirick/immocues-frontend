import React, { Component } from "react";
import Script from "react-load-script";
import PlacesAutocomplete from "react-places-autocomplete";

export class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  handleError = (status, clearSuggestions) => {
    // Do something
  };

  render() {
    const {
      input,
      id,
      onSelect,
      placeholder,
      options,
      meta: { touched, error }
    } = this.props;
    return (
      <div className="form-field">
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn29s7xhE57few43QVFXC-LWjN-7IZjs0&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            value={input.value}
            onChange={input.onChange}
            onSelect={onSelect}
            onError={this.handleError}
            searchOptions={options}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div className="autocomplete__wrapper">
                <input
                  {...getInputProps({
                    autoComplete: "off",
                    placeholder,
                    className: `form-input ${
                      touched && !!error ? "form-input__error" : ""
                    }`,
                    id
                  })}
                />
                <div className={`autocomplete ${suggestions.length === 0 ? 'no-results' : ''}`}>
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "autocomplete__item--active"
                      : "autocomplete__item";
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
        {touched &&
          error && <div className="form-input__error-message">{error}</div>}
      </div>
    );
  }
}

export default PlaceInput;
