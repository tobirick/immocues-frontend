import React from "react";

const TextArea = ({ input, rows, placeholder, meta: { touched, error } }) => {
  return (
    <div className="form-field">
      <textarea
        className={`form-input ${
          touched && !!error ? "form-input__error" : ""
        }`}
        {...input}
        placeholder={placeholder}
        rows={rows}
      />
      {touched &&
        error && <label className="form-input__error-message">{error}</label>}
    </div>
  );
};

export default TextArea;
