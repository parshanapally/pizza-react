import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { connect } from "react-redux";

export class PizzaList extends Component {
  renderList = () => {
    const pizzas = this.props.pizzas;
    console.log(this.props);
    if (pizzas && pizzas.length) {
      console.log(pizzas);
      return pizzas.map(pizza => {
        return (
          <li className="pizza-list-item" key={pizza}>
            {pizza}
          </li>
        );
      });
    } else {
      return (
        <p>There is not enough pizzas for you today! Try again next time!</p>
      );
    }
  };
  render() {
    console.log(this.props);
    return <ul className="pizza-list">{this.renderList()}</ul>;
  }
}

PizzaList.propTypes = {
  pizzas: [PropTypes.array].isRequired
};

const mapStateToProps = state => {
  return { pizzas: state.pizzas };
};

export const ConnectedPizzaList = connect(mapStateToProps)(PizzaList);
