/* global google */
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import cuid from "cuid";
import { createCustomer } from "../actions/customers";
import SubHeader from "../components/Layout/SubHeader";
import NewCustomerFirstPage from "../components/NewCustomerPage/NewCustomerFirstPage";
import NewCustomerSecondPage from "../components/NewCustomerPage/NewCustomerSecondPage";
import NewCustomerThirdPage from "../components/NewCustomerPage/NewCustomerThirdPage";

import validate from "../validators/newCustomerForm";

const actions = {
  createCustomer
};

class NewCustomerPage extends Component {
  state = {
    currentStep: 1
  };

  onFormSubmit = values => {
    values.profileImageSrc = "/img/default-profile.png";
    values.id = cuid();
    this.props.createCustomer(values);
    this.props.reset();
    this.props.history.push("/customers");
  };

  nextStep = () => {
    if(this.props.valid) {
        this.setState({ currentStep: this.state.currentStep + 1 });
    }
  };

  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  goToStep = step => () => {
    if (this.props.valid || !(step > this.state.currentStep)) {
      this.setState({ currentStep: step });
    } else {
      console.log('Please fill all fields and fix the errors!');
    }
  };

  render() {
    const { handleSubmit } = this.props;
    const { currentStep } = this.state;
    return (
      <div className="content-wrapper">
        <SubHeader
          title="New Customer"
          buttonText="Go back"
          buttonLinkTo="/customers"
          buttonStyle="border"
        />
        <div className="content pt-3">
          <div className="multi-step__nav">
            <div onClick={this.goToStep(1)} className={`multi-step__nav-item ${currentStep === 1 ? 'active' :''}`}>
              1. Default Information
            </div>
            <div onClick={this.goToStep(2)} className={`multi-step__nav-item ${currentStep === 2 ? 'active' :''}`}>
              2. Contact Information
            </div>
            <div onClick={this.goToStep(3)} className={`multi-step__nav-item ${currentStep === 3 ? 'active' :''}`}>
              3. Additional Information
            </div>
          </div>
          <div className="content__box content__box--main">
            {currentStep === 1 && (
              <NewCustomerFirstPage onSubmit={this.nextStep} />
            )}
            {currentStep === 2 && (
              <NewCustomerSecondPage
                prevStep={this.prevStep}
                onSubmit={this.nextStep}
              />
            )}
            {currentStep === 3 && (
              <NewCustomerThirdPage
                prevStep={this.prevStep}
                onSubmit={handleSubmit(this.onFormSubmit)}
              />
            )}
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
  reduxForm({
    form: "newCustomerForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(NewCustomerPage)
);
