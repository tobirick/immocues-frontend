import React, { Component } from "react";
import PropTypes from "prop-types";
import MapComponent from "../../../helpers/maps/MapComponent";
import MenuDropDown from "../../../helpers/menu/MenuDropDown";

class CustomerPageLeftSidebar extends Component {
  render() {
    const { customer } = this.props;
    return (
      <div>
        <div className="customer__header-info">
          <div className="customer__header-info-left">
            <img
              className="customer__header-info-image"
              src={customer.profileImageSrc}
              alt={`${customer.firstName} ${customer.lastName}`}
            />
          </div>
          <div className="customer__header-info-center">
            <span className="customer__header-info-name">
              {customer.firstName} {customer.lastName}
            </span>
            <span className="customer__header-info-title">
              {customer.title ? customer.title : "---"}
            </span>
          </div>
          <div className="customer__header-info-right">
            <div className="clickable">
              <i className="far fa-user-edit" />
            </div>
            <div className="clickable">
              <i className="fal fa-trash" />
            </div>
          </div>
        </div>
        <div className="customer__basic-info">
          <div className="customer__basic-info-item">
            <div className="customer__basic-info-item-label">Tags</div>
            <div className="customer__basic-info-item-text">
              <div className="customer__basic-info-tags">
                {customer.tags && customer.tags.length > 0
                  ? customer.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="customer__basic-info-tag-item"
                        >
                          {tag}
                        </div>
                      );
                    })
                  : "---"}
              </div>
            </div>
          </div>
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
  }
}

CustomerPageLeftSidebar.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerPageLeftSidebar;
