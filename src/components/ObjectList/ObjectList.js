import React, { Component } from "react";
import PropTypes from "prop-types";
import ObjectListItem from "./ObjectListItem";

class ObjectList extends Component {
  render() {
    const { objects } = this.props;
    return (
      <div>
        {objects &&
          objects.map(object => (
            <ObjectListItem key={object.id} object={object} />
          ))}
      </div>
    );
  }
}

ObjectList.propTypes = {
  objects: PropTypes.array.isRequired
};

export default ObjectList;
