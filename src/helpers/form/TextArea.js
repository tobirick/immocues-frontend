import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  input,
  rows,
  id,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <div className="form-field">
      <textarea
        id={id}
        className={`form-input ${
          touched && !!error ? "form-input__error" : ""
        }`}
        {...input}
        placeholder={placeholder}
        rows={rows}
      />
      {touched &&
        error && <div className="form-input__error-message">{error}</div>}
    </div>
  );
};

TextArea.propTypes = {
  input: PropTypes.object.isRequired,
  rows: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object.isRequired
};

export default TextArea;
