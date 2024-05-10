import React, { Component } from "react";

class Counter extends Component {
state = {
  count: 1,
  };

  styles = {
    fontSize: 5,
    fontWeight: 'bold',
    padding: 0.05
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-3"><h4>zero</h4></span>
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
