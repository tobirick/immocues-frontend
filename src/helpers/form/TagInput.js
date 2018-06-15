import React, { Component } from "react";
import PropTypes from "prop-types";

class TagInput extends Component {
  state = {
    tags: this.props.input.value || [],
    inputValue: ""
  };
  handleKeyUp = e => {
    e.preventDefault();
    e.stopPropagation();
    const key = e.keyCode;

    if (key === 188) {
      this.addTag();
    }
  };

  handleInputValueChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  addTag = () => {
    const value = this.state.inputValue.slice(0, -1);
    if (this.state.tags.indexOf(value) === -1) {
      this.setState(
        prevState => ({
          tags: [...prevState.tags, value],
          inputValue: ""
        }),
        () => {
          this.props.onTagsChange([...this.state.tags]);
        }
      );
    }
  };

  removeTag = tag => () => {
    const tags = [...this.state.tags];
    const index = tags.indexOf(tag);
    if (index !== -1) {
      tags.splice(index, 1);
      this.setState({ tags }, () => {
        this.props.onTagsChange([...this.state.tags]);
      });
    }
  };
  render() {
    const {
      placeholder,
      id,
      meta: { touched, error }
    } = this.props;
    const { tags, inputValue } = this.state;
    return (
      <div className="form-field">
        <div className="tag-input">
          <div className="tag-input__list">
            {tags &&
              tags.map((tag, index) => (
                <div key={index} className="tag-input__list-item">
                  <span className="tag-input__list-item-text">{tag}</span>
                  <span
                    onClick={this.removeTag(tag)}
                    className="tag-input__list-item-icon"
                  >
                    <i className="fal fa-times" />
                  </span>
                </div>
              ))}
          </div>
          <input
            value={inputValue}
            onKeyUp={this.handleKeyUp}
            onChange={this.handleInputValueChange}
            id={id}
            type="text"
            placeholder={placeholder}
            className="form-input"
          />
        </div>
        <span className="form-input__info">
          Press <strong>,</strong> to add a tag.
        </span>
      </div>
    );
  }
}

TagInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  onTagsChange: PropTypes.func.isRequired
};

export default TagInput;
