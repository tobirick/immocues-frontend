import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { startLogin } from "../../actions/auth";
import TextInput from "../../helpers/form/TextInput";

const actions = {
  startLogin
};

export class LoginPage extends Component {
  onFormSubmit = values => {
    console.log(values);
    this.props.startLogin(values).then(() => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div className="form-row">
            <div className="col-12">
              <label className="form-label" htmlFor="email">
                E-Mail
              </label>
              <Field
                id="email"
                name="email"
                type="text"
                component={TextInput}
                placeholder="E-Mail"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-12">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                component={TextInput}
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="button-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(
  reduxForm({
    form: "login"
  })(LoginPage)
);
