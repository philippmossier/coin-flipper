import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let title;
    if (this.props.head !== undefined) {
      title = (
        <img
          className="Coin-img"
          src={
            this.props.head
              ? "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png"
              : "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"
          }
          alt={this.props.head ? "Head" : "Tail"}
        />
      );
    }
    return <section className="Coin">{title}</section>;
  }
}

export default Coin;
