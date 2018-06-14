import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MapComponent from "../../helpers/maps/MapComponent";

const CustomerPreview = ({ customer, setCustomer }) => {
  return (
    <div className="customer__preview">
      <div className="customer__preview-actions">
        <div className="customer__preview-button">
          <Link to={`/customers/${customer.id}`}>
            <i className="fas fa-arrow-right" />
          </Link>
        </div>
        <div onClick={setCustomer({})} className="customer__preview-button">
          <i className="fal fa-times-circle" />
        </div>
      </div>
      <div className="customer__preview-header">
        <div className="customer__preview-header-left">
          <img
            src={customer.profileImageSrc}
            alt={`${customer.firstName} ${customer.lastName}`}
          />
        </div>
        <div className="customer__preview-header-right">
          <span className="customer__preview-header-name">
            {customer.firstName} {customer.lastName}
          </span>
          <span className="customer__preview-header-title">
            {customer.title ? customer.title : "---"}
          </span>
        </div>
      </div>
      <div className="customer__basic-info">
        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Name</div>
          <div className="customer__basic-info-item-text">
            {customer.firstName} {customer.lastName}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Title</div>
          <div className="customer__basic-info-item-text">
            {customer.title ? customer.title : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Company</div>
          <div className="customer__basic-info-item-text">
            {customer.company ? customer.company : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">E-Mail</div>
          <div className="customer__basic-info-item-text">
            {customer.eMail ? customer.eMail : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Phone Number</div>
          <div className="customer__basic-info-item-text">
            {customer.phoneNumber ? customer.phoneNumber : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">
            Mobile Phone Number
          </div>
          <div className="customer__basic-info-item-text">
            {customer.mobilePhoneNumber ? customer.mobilePhoneNumber : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Website</div>
          <div className="customer__basic-info-item-text">
            {customer.websiteUrl ? customer.websiteUrl : "---"}
          </div>
        </div>

        <div className="customer__basic-info-item">
          <div className="customer__basic-info-item-label">Address</div>
          {customer.addressLatLng && (
            <MapComponent
              lat={customer.addressLatLng.lat}
              lng={customer.addressLatLng.lng}
            />
          )}
          <div className="customer__basic-info-item-text">
            <strong>
              {customer.addressStreet ? customer.addressStreet : "---"}
            </strong>
            <p>{customer.addressCity ? customer.addressCity : "---"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerPreview.propTypes = {
  customer: PropTypes.object.isRequired,
  setCustomer: PropTypes.func.isRequired
};

export default CustomerPreview;
