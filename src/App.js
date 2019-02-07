import React, { Component } from "react";
import FilterForm from "./components/FilterForm";
import { ConnectedPizzaList } from "./components/PizzaList";
import "./App.css";
import pizza from "./img/pizza.png";
import { connect } from "react-redux";
import { fetchPizzas } from "./actions/fetchPizzas";
import { handleFilter, handleSort } from "./actions/filters";

export class App extends Component {
  state = {
    load: false
  };

  async componentDidMount() {
    await this.props.fetchPizzas();
  }

  handleSort = () => {
    this.props.handleSort("pizzas");
  };

  handleFilter = e => {
    this.props.handleFilter("pizzas");
  };
  render() {
    return (
      <div>
        <h2>
          Daily Dose of
          <span className="pizza-container">
            <img className="pizza-image" src={pizza} alt="pizza" />
          </span>
        </h2>
        <FilterForm
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
        />
        <ConnectedPizzaList />
      </div>
    );
  }
}

export const ConnectedApp = connect(
  null,
  { fetchPizzas, handleFilter, handleSort }
)(App);
