import React from "react";

const TextInput = ({ input, type, placeholder, id, meta: { touched, error } }) => {
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

export default TextInput;
