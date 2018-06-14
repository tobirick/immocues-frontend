import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ObjectList from "../components/ObjectList/ObjectList";
import SubHeader from "../components/Layout/SubHeader";

const mapState = state => ({
  objects: state.objects
});

const ObjectsPage = ({ objects }) => (
  <div className="content-wrapper">
    <SubHeader
      title="Objects"
      buttonText="New Object"
      buttonLinkTo="/objects/new"
    />
    <div className="content">
      <ObjectList objects={objects} />
    </div>
  </div>
);

ObjectsPage.propTypes = {
  objects: PropTypes.array.isRequired
};

export default connect(mapState)(ObjectsPage);
