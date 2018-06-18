import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Script from "react-load-script";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import SubHeader from "../../components/Layout/SubHeader";
import { startSignUp } from "../../actions/auth";
import TextInput from "../../helpers/form/TextInput";
import PlaceInput from "../../helpers/form/PlaceInput";

import validate from "../../validators/newUserForm";

const mapActions = dispatch => ({
  startSignUp: user => dispatch(startSignUp(user))
});

class NewEmployeePage extends Component {
  state = {
    cityLatLng: {},
    addressLatLng: {},
    scriptLoaded: false
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("addressCity", selectedCity);
      });
  };

  handleAddressSelect = selectedAddress => {
    geocodeByAddress(selectedAddress)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          addressLatLng: latlng
        });
      })
      .then(() => {
        this.props.change("addressStreet", selectedAddress);
        this.props.change("addressLatLng", this.state.addressLatLng);
      });
  };

  onFormSubmit = values => {
    this.props.startSignUp(values).then(() => {
      this.props.reset();
      this.props.history.push("/admin/employees");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    const { scriptLoaded, cityLatLng } = this.state;
    return (
      <div className="content-wrapper">
        <SubHeader
          title="New Employee"
          buttonText="Go back"
          buttonLinkTo="/admin/employees"
          buttonStyle="border"
        />
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn29s7xhE57few43QVFXC-LWjN-7IZjs0&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <div className="content pt-3 pb-3">
          <div className="content__box content__box--main">
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
              <div className="form-row">
                <div className="col-12 col-md-6">
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
                <div className="col-12 col-md-6">
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
                  <label className="form-label" htmlFor="employeenumber">
                    Employee Number
                  </label>
                  <Field
                    id="employeenumber"
                    name="employeeNumber"
                    type="text"
                    component={TextInput}
                    placeholder="Employee Number"
                  />
                </div>
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
              </div>
              <div className="form-row">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="birthdate">
                    Birth Date
                  </label>
                  <Field
                    id="birthdate"
                    name="birthDate"
                    type="text"
                    component={TextInput}
                    placeholder="Birth Date"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="gender">
                    Gender
                  </label>
                  <Field
                    id="gender"
                    name="gender"
                    type="text"
                    component={TextInput}
                    placeholder="Gender"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="startedworking">
                    Started working
                  </label>
                  <Field
                    id="startedworking"
                    name="stoppedWorking"
                    type="text"
                    component={TextInput}
                    placeholder="Started working"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="stoppedworking">
                    Stopped working
                  </label>
                  <Field
                    id="stoppedworking"
                    name="startedWorking"
                    type="text"
                    component={TextInput}
                    placeholder="Stopped working"
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
                    placeholder="Phone number"
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
                    placeholder="Mobile phone number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 col-md-6">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <Field
                    id="city"
                    name="addressCity"
                    type="text"
                    component={PlaceInput}
                    options={{ types: ["(cities)"] }}
                    placeholder="City"
                    onSelect={this.handleCitySelect}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="street" className="form-label">
                    Street
                  </label>
                  {scriptLoaded && (
                    <Field
                      id="street"
                      name="addressStreet"
                      type="text"
                      component={PlaceInput}
                      options={{
                        location: new google.maps.LatLng(cityLatLng),
                        radius: 1000,
                        types: ["address"]
                      }}
                      placeholder="Street"
                      onSelect={this.handleAddressSelect}
                    />
                  )}
                </div>
              </div>
              <div
                className="form-row form-row--right"
                style={{ padding: "0 0.75rem" }}
              >
                <button type="submit" className="button-primary">
                  Create
                </button>
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
  mapActions
)(
  reduxForm({
    form: "newEmployeeForm",
    validate
  })(NewEmployeePage)
);
