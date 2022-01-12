import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class Text extends Component {
  render() {
    return (
      <div>
        <span> 开始添加={this.props.count}</span>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Text);
