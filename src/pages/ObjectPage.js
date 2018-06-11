import React from 'react';
import { connect } from 'react-redux';

const mapState = (state, ownProps) => {
    const objectId = ownProps.match.params.id;
    let object = {};
  
    if (objectId && state.objects.length > 0) {
        object = state.objects.filter(object => object.id === objectId)[0];
    }
  
    return {
        object
    }
  }

const ObjectPage = ({object}) => {
    return (
        <h1>{object.title}</h1>
    );
}

export default connect(mapState)(ObjectPage);