import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  input,
  placeholder,
  id,
  multiple,
  options,
  meta: { touched, error }
}) => {
  return (
    <div className="form-field">
      <select
        id={id}
        className={`form-input ${
          touched && !!error ? "form-input__error" : ""
        }`}
        value={input.value || options[0].value}
        placeholder={placeholder}
        onChange={(e, data) => input.onChange(e.target.value)}
      >
        {options &&
          options.map(option => (
            <option key={option.key} value={option.value}>
              {option.text}
            </option>
          ))}
      </select>
      {touched &&
        error && <div className="form-input__error-message">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectInput;
