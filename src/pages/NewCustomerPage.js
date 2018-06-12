import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  isNumeric,
  createValidator
} from "revalidate";
import cuid from "cuid";
import { createCustomer } from "../actions/customers";
import SubHeader from "../components/Layout/SubHeader";
import TextInput from "../helpers/form/TextInput";
import TextArea from "../helpers/form/TextArea";

const isValidEmail = createValidator(
  message => value => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return message;
    }
  },
  "Invalid email address"
);

const validate = combineValidators({
  firstName: isRequired({ message: "First Name is required" }),
  lastName: isRequired({ message: "Last Name is required" }),
  eMail: composeValidators(isValidEmail)(),
  phoneNumber: composeValidators(
    isNumeric({ message: "Phone Number needs to be a number" })
  )(),
  mobilePhoneNumber: composeValidators(
    isNumeric({ message: "Mobile Phone Number needs to be a number" })
  )()
});

const actions = {
  createCustomer
};

class NewCustomerPage extends Component {
  onFormSubmit = values => {
    values.profileImageSrc = "/img/default-profile.png";
    values.id = cuid();
    this.props.createCustomer(values);
    this.props.history.push("/customers");
  };

  render() {
    return (
      <div className="content-wrapper">
        <SubHeader
          title="New Customer"
          buttonText="Go back"
          buttonLinkTo="/customers"
          buttonStyle="border"
        />
        <div className="content pt-3">
          <div className="content__box content__box--main">
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
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
              <div className="form-row form-row--right form-row--button">
                <button className="button-primary">Create Customer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(
  reduxForm({ form: "newCustomerForm", enableReinitialize: true, validate })(
    NewCustomerPage
  )
);
