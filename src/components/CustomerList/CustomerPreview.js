import React from 'react';
import { Link } from 'react-router-dom';

const CustomerPreview = ({ customer, setCustomer }) => {
    return (
        <div className="customer__preview">
            <div className="customer__preview-actions">
                <div className="customer__preview-button">
                    <Link to={`customers/${customer.id}`}>
                        <i className="fas fa-arrow-right" />
                    </Link>
                </div>
                <div
                    onClick={setCustomer(null)}
                    className="customer__preview-button"
                >
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
                        {customer.title}
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
                        {customer.title}
                    </div>
                </div>

                <div className="customer__basic-info-item">
                    <div className="customer__basic-info-item-label">
                        E-Mail
                    </div>
                    <div className="customer__basic-info-item-text">
                        {customer.eMail}
                    </div>
                </div>

                <div className="customer__basic-info-item">
                    <div className="customer__basic-info-item-label">
                        Phone Number
                    </div>
                    <div className="customer__basic-info-item-text">
                        {customer.phoneNumber}
                    </div>
                </div>

                <div className="customer__basic-info-item">
                    <div className="customer__basic-info-item-label">
                        Mobile Phone Number
                    </div>
                    <div className="customer__basic-info-item-text">
                        {customer.mobilePhoneNumber}
                    </div>
                </div>

                <div className="customer__basic-info-item">
                    <div className="customer__basic-info-item-label">
                        Address
                    </div>
                    <div className="customer__basic-info-item-text">
                        Google Maps Widget
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerPreview;
