import React from "react";
import ObjectList from "../components/ObjectList/ObjectList";
import SubHeader from "../components/Layout/SubHeader";

const ObjectsPage = () => (
  <div className="content-wrapper">
    <SubHeader
      title="Objects"
      buttonText="New Object"
      buttonLinkTo="/objects/new"
    />
    <div className="content">
      <ObjectList />
    </div>
  </div>
);

export default ObjectsPage;
