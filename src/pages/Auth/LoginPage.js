import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { startLogin } from "../../actions/auth";
import TextInput from "../../helpers/form/TextInput";

import validate from "../../validators/loginForm";

const actions = {
  startLogin
};

export class LoginPage extends Component {
  state = {
    error: false
  };
  onFormSubmit = values => {
    this.props
      .startLogin(values)
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    const { handleSubmit } = this.props;
    const { error } = this.state;
    return (
      <div className="content-wrapper">
        <div className="content content--login pt-3 center-h-flex">
          <div className="col-12 col-md-6">
            <div className="content__box content__box--main">
              {error && (
                <div className="alert alert--error">
                  Authentication failed. Please try again.
                </div>
              )}
              <h1>Login to Immocues</h1>
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
                <button type="submit" className="button-primary block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
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
    form: "login",
    validate
  })(LoginPage)
);
