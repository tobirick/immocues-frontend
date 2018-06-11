import React, { Component } from 'react';

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
        return (
            <div>
                <div className="customer__info-tabs">
                    <div className={`customer__info-tab-item ${calendarTabOpen ? 'open' : ''}`}>
                        <div
                            onClick={this.toggleTab('calendarTabOpen')}
                            className="customer__info-tab-item-heading"
                        >
                            <h4>Calendar Events</h4>
                            <span />
                        </div>
                        <div className="customer__info-tab-item-content">
                            Content
                        </div>
                    </div>

                    <div className={`customer__info-tab-item ${objectTabOpen ? 'open' : ''}`}>
                        <div
                            onClick={this.toggleTab('objectTabOpen')}
                            className="customer__info-tab-item-heading"
                        >
                            <h4>Objects</h4>
                            <span />
                        </div>
                        <div className="customer__info-tab-item-content">
                            Content
                        </div>
                    </div>

                    <div className={`customer__info-tab-item ${filesTabOpen ? 'open' : ''}`}>
                        <div
                            onClick={this.toggleTab('filesTabOpen')}
                            className="customer__info-tab-item-heading"
                        >
                            <h4>Files</h4>
                            <span />
                        </div>
                        <div className="customer__info-tab-item-content">
                            Content
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerPageRightSidebar;
