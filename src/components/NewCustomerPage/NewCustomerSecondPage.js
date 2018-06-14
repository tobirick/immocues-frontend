import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import Script from "react-load-script";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import TextInput from "../../helpers/form/TextInput";
import TextArea from "../../helpers/form/TextArea";
import PlaceInput from "../../helpers/form/PlaceInput";

import validate from "../../validators/newCustomerForm";

class NewCustomerSecondPage extends Component {
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

  render() {
    const { prevStep, handleSubmit } = this.props;
    const { scriptLoaded, cityLatLng } = this.state;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn29s7xhE57few43QVFXC-LWjN-7IZjs0&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
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
          <div className="form-row form-row--right form-row--button">
            <button type="button" onClick={prevStep} className="button-primary">
              Previous
            </button>
            <button type="submit" className="button-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NewCustomerSecondPage.propTypes = {
  prevStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: "newCustomerForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(NewCustomerSecondPage);
