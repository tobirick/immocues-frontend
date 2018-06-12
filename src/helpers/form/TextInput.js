import React from "react";

const TextInput = ({ input, type, placeholder, meta: { touched, error } }) => {
  return (
    <div className="form-field">
      <input
        className={`form-input ${
          touched && !!error ? "form-input__error" : ""
        }`}
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        error && <label className="form-input__error-message">{error}</label>}
    </div>
  );
};

export default TextInput;
