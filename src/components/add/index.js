import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD_ACTION} from "../../actions";

function mapDispatchToProps(dispatch) {
  return {
    sendAction:()=>{
      dispatch(ADD_ACTION)
    }
  };
}

class Add extends Component {

  handleClick = () => {
    console.log("+ 事件开始发生");
    this.props.sendAction();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default connect(
  null, mapDispatchToProps
)(Add);
