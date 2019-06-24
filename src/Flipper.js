import React, { Component } from "react";
import Coin from "./Coin";
class Flipper extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      flipCount: 0,
      head: undefined,
      headCount: 0,
      tailCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    const side = Math.floor(Math.random() * 2);
    if (side === 0) {
      this.setState({
        head: true
      });
      this.setState(currState => ({ headCount: currState.headCount + 1 }));
      this.setState(currState => ({ flipCount: currState.flipCount + 1 }));
    } else {
      this.setState({
        head: false
      });
      this.setState(currState => ({ tailCount: currState.tailCount + 1 }));
      this.setState(currState => ({ flipCount: currState.flipCount + 1 }));
    }
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <div className="Flipper">
        <h1>Let's flip a coin!</h1>
        <Coin head={this.state.head} />
        <button onClick={this.handleClick}>Flip Me !!!</button>
        <p>{`Out of ${this.state.flipCount} flips, there have been ${
          this.state.headCount
        } heads and ${this.state.tailCount} tails.`}</p>
      </div>
    );
  }
}
// Not random solution (opposite) :
//   generate() {
//     this.setState(currState => ({
//       flipCount: currState.flipCount + 1,
//       head: currState.head ? false : true,
//       headCount: currState.head ? currState.headCount : currState.headCount + 1,
//       tailCount: currState.head ? currState.tailCount + 1 : currState.tailCount
//     }));
//   }

// Does not work but i like the idea of Math.random() < 0.5
//   generate() {
//     this.setState(currState => ({
//       flipCount: currState.flipCount + 1,
//       head: currState.head ? Math.random() < 0.5 : Math.random() < 0.5,
//       headCount: currState.head ? currState.headCount : currState.headCount + 1,
//       tailCount: currState.head ? currState.tailCount + 1 : currState.tailCount
//     }));
//   }

export default Flipper;
