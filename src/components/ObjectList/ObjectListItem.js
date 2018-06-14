import React, { Component } from "react";
import PropTypes from "prop-types";
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

ObjectListItem.propTypes = {
  object: PropTypes.object.isRequired
};

export default ObjectListItem;
