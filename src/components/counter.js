import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };
  addCounter = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };
  subsCounter = () => {
    if (this.state.count !== 0) {
      this.setState((prevState, { count }) => ({
        count: prevState.count - 1
      }));
    } else
      alert(
        "Oh no! The wolf gained minus power, now he has become an angel and will now break your browser"
      );
  };
  resetCounter = () => {
    this.setState(({ count }) => ({
      count: 0
    }));
  };
  render() {
    return (
      <div>
        <button class="counter-button" onClick={this.addCounter}>
          +
        </button>
        <p class="big">Power: {this.state.count}</p>
        <button class="counter-button" onClick={this.resetCounter}>
          Reset
        </button>
        <button class="counter-button" onClick={this.subsCounter}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
