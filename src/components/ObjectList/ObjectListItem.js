import React, { Component } from "react";
import { Link } from "react-router-dom";

class ObjectListItem extends Component {
  render() {
    const { object } = this.props;
    return (
      <div>
        <Link to={`/objects/${object.id}`}>
          <h1>{object.title}</h1>
        </Link>
      </div>
    );
  }
}

export default ObjectListItem;
