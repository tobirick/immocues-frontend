import React from "react";

const CustomerPageLeftSidebar = ({ customer }) => {
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
          <i className="far fa-star" />
          <i className="far fa-ellipsis-v" />
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
          <div className="customer__basic-info-item-text">
            Google Maps Widget
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPageLeftSidebar;
