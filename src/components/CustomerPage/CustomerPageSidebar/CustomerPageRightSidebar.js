import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomerPageRightSidebar extends Component {
  state = {
    calendarTabOpen: true,
    objectTabOpen: false,
    filesTabOpen: false
  };

  toggleTab = tabType => () => {
    this.setState({
      [tabType]: !this.state[tabType]
    });
  };

  render() {
    const { calendarTabOpen, objectTabOpen, filesTabOpen } = this.state;
    const {
      customer,
      numberOfEvents,
      currentEventNumber,
      prevEventId,
      nextEventId
    } = this.props;
    return (
      <div>
        <div className="customer__nav">
          <div
            className={`customer__nav-button customer__nav-button--prev ${
              !prevEventId ? "disabled" : ""
            }`}
          >
            {prevEventId ? (
              <Link to={`/customers/${prevEventId}`}>
                <i className="fal fa-angle-left" /> Previous
              </Link>
            ) : (
              <Link to={`/customers/${customer.id}`}>
                <i className="fal fa-angle-left" /> Previous
              </Link>
            )}
          </div>
          <div className="customer__nav-number">
            ({currentEventNumber} of {numberOfEvents})
          </div>
          <div
            className={`customer__nav-button customer__nav-button--next ${
              !nextEventId ? "disabled" : ""
            }`}
          >
            {nextEventId ? (
              <Link to={`/customers/${nextEventId}`}>
                Next <i className="fal fa-angle-right" />
              </Link>
            ) : (
              <Link to={`/customers/${customer.id}`}>
                Next <i className="fal fa-angle-right" />
              </Link>
            )}
          </div>
        </div>
        <div className="customer__info-tabs">
          <div
            className={`customer__info-tab-item ${
              calendarTabOpen ? "open" : ""
            }`}
          >
            <div
              onClick={this.toggleTab("calendarTabOpen")}
              className="customer__info-tab-item-heading"
            >
              <h4>Calendar Events</h4>
              <span />
            </div>
            <div className="customer__info-tab-item-content">Content</div>
          </div>

          <div
            className={`customer__info-tab-item ${objectTabOpen ? "open" : ""}`}
          >
            <div
              onClick={this.toggleTab("objectTabOpen")}
              className="customer__info-tab-item-heading"
            >
              <h4>Related Objects</h4>
              <span />
            </div>
            <div className="customer__info-tab-item-content">Content</div>
          </div>

          <div
            className={`customer__info-tab-item ${filesTabOpen ? "open" : ""}`}
          >
            <div
              onClick={this.toggleTab("filesTabOpen")}
              className="customer__info-tab-item-heading"
            >
              <h4>Files</h4>
              <span />
            </div>
            <div className="customer__info-tab-item-content">Content</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerPageRightSidebar;
