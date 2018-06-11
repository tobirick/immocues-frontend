import React, { Component } from 'react';
import {connect} from 'react-redux';
import ObjectListItem from './ObjectListItem';

const mapState = (state) => ({
    objects: state.objects
})

class ObjectList extends Component {
    render() {
      const { objects } = this.props;
      return (
        <div>
          {objects && objects.map(object => (
            <ObjectListItem
              key={object.id}
              object={object}
            />
          ))}
        </div>
      );
    }
  }
  
  export default connect(mapState)(ObjectList);