import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import TextInput from "../../helpers/form/TextInput";
import TextArea from "../../helpers/form/TextArea";

import validate from "../../validators/newCustomerForm";

const NewCustomerThirdPage = ({ prevStep, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="notes">
            Description/Notes
          </label>
          <Field
            id="notes"
            name="notes"
            component={TextArea}
            rows="5"
            placeholder="Description/Notes"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Tags
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Profile Image
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Additional Files
          </label>
        </div>
        <div className="form-row form-row--right form-row--button">
          <button type="button" onClick={prevStep} className="button-primary">
            Previous
          </button>
          <button type="submit" className="button-primary">
            Create Customer
          </button>
        </div>
      </form>
    </div>
  );
};

NewCustomerThirdPage.propTypes = {
  prevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "newCustomerForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCustomerThirdPage);
