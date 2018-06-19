import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DateInput = ({
  input: { value, onChange, ...restInput },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <div className="form-field">
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        {...restInput}
        className="form-input"
        autoComplete="off"
      />
      {touched &&
        error && <div className="form-input__error-message">{error}</div>}
    </div>
  );
};

DateInput.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.object.isRequired
};

export default DateInput;
