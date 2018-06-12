import React from "react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../helpers/form/TextInput";
import TextArea from "../../helpers/form/TextArea";

import validate from "../../validators/newCustomerForm";

const NewCustomerSecondPage = ({ prevStep, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="email">
              E-Mail
            </label>
            <Field
              id="email"
              name="eMail"
              type="text"
              component={TextInput}
              placeholder="E-Mail"
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="websiteurl">
              Website URL
            </label>
            <Field
              id="websiteurl"
              name="websiteUrl"
              type="text"
              component={TextInput}
              placeholder="Website URL"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="phonenumber">
              Phone Number
            </label>
            <Field
              id="phonenumber"
              name="phoneNumber"
              type="text"
              component={TextInput}
              placeholder="Phone Number"
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label" htmlFor="mobilephonenumber">
              Mobile Phone Number
            </label>
            <Field
              id="mobilephonenumber"
              name="mobilePhoneNumber"
              type="text"
              component={TextInput}
              placeholder="Mobile Phone Number"
            />
          </div>
        </div>
        <div className="form-row form-row--right form-row--button">
          <button type="button" onClick={prevStep} className="button-primary">
            Previous
          </button>
          <button type="submit" className="button-primary">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "newCustomerForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCustomerSecondPage);
