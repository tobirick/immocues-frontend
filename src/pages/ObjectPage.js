import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SubHeader from "../components/Layout/SubHeader";

const mapState = (state, ownProps) => {
  const objectId = ownProps.match.params.id;
  let object = {};

  if (objectId && state.objects.length > 0) {
    object = state.objects.filter(object => object.id === objectId)[0];
  }

  return {
    object
  };
};

const ObjectPage = ({ object }) => {
  return (
    <div className="content-wrapper">
      <SubHeader
        title={object.title}
        buttonText="Go back"
        buttonLinkTo="/objects"
        buttonStyle="border"
      />
      <div className="content" />
    </div>
  );
};

ObjectPage.propTypes = {
  object: PropTypes.object.isRequired
};

export default connect(mapState)(ObjectPage);
