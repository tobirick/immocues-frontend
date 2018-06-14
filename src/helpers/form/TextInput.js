import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  input,
  type = "text",
  placeholder,
  id,
  meta: { touched, error }
}) => {
  return (
    <div className="form-field">
      <input
        id={id}
        className={`form-input ${
          touched && !!error ? "form-input__error" : ""
        }`}
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        error && <div className="form-input__error-message">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object.isRequired
};

export default TextInput;
