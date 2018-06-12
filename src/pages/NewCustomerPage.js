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
  title: isRequired({ message: "Title is required" }),
  eMail: composeValidators(
    isRequired({ message: "E-Mail is required" }),
    isValidEmail
  )(),
  phoneNumber: composeValidators(
    isRequired({ message: "Phone Number is required" }),
    isNumeric({ message: "Phone Number needs to be a number" })
  )(),
  mobilePhoneNumber: composeValidators(
    isRequired({ message: "Mobile Phone Number is required" }),
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
	this.props.history.push('/customers');
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
              <Field
                name="firstName"
                type="text"
                component={TextInput}
                placeholder="First Name"
              />
              <Field
                name="lastName"
                type="text"
                component={TextInput}
                placeholder="Last Name"
              />
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Title"
              />
              <Field
                name="eMail"
                type="text"
                component={TextInput}
                placeholder="E-Mail"
              />
              <Field
                name="phoneNumber"
                type="text"
                component={TextInput}
                placeholder="Phone Number"
              />
              <Field
                name="mobilePhoneNumber"
                type="text"
                component={TextInput}
                placeholder="Mobile Phone Number"
              />
              <button className="button-primary">Create</button>
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
