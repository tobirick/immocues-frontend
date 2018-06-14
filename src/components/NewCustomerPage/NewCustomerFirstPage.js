import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import TextInput from "../../helpers/form/TextInput";
import TextArea from "../../helpers/form/TextArea";

import validate from "../../validators/newCustomerForm";

const NewCustomerFirstPage = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              type="text"
              component={TextInput}
              placeholder="First Name"
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              component={TextInput}
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              component={TextInput}
              placeholder="Title"
            />
          </div>

          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="company">
              Company
            </label>
            <Field
              id="company"
              name="company"
              type="text"
              component={TextInput}
              placeholder="Company"
            />
          </div>
        </div>
        <div
          className="form-row form-row--right"
          style={{ padding: "0 0.75rem" }}
        >
          <button type="submit" className="button-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

NewCustomerFirstPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "newCustomerForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCustomerFirstPage);
