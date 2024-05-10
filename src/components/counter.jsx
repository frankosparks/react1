import React, { Component } from "react";

class Counter extends Component {
state = {
  count: 1,
  };


  render() {
    return (
      <React.Fragment>
        <span style={{fontSize: 30,fontWeight:'bold'}} className="badge badge-primary m-3"><h4>zero</h4></span>
        <button className="btn btn-secondary btn-sm ">Increment</button>
      </React.Fragment>
    );
  }
}

/*
formatCount(); {
  const { count } = this.state;
  return count === 0 ? "Zero" : count;
};
*/

export default Counter;
