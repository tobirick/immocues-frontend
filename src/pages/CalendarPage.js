import React, { Component } from "react";
import SubHeader from "../components/Layout/SubHeader";

export class CalendarPage extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <SubHeader title="Calendar" />
        <div className="content">This is Calendar</div>
      </div>
    );
  }
}

export default CalendarPage;
