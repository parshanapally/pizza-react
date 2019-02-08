import React, { Component } from "react";
import FilterForm from "./components/FilterForm";
import PizzaList from "./components/PizzaList";
import "./App.css";
import pizza from "./img/pizza.png";
import { connect } from "react-redux";
import { fetchPizzas } from "./actions/fetchPizzas";

export class App extends Component {
  state = {
    load: false,
    filteredpizzas: []
  };

  async componentDidMount() {
    await this.props.fetchPizzas();
  }

  handleSort = () => {
    const arrPizzas = this.props.pizzas;
    this.setState({
      filteredpizzas: [...arrPizzas].sort((a, b) =>
        a.toLowerCase() > b.toLowerCase() ? 1 : -1
      )
    });
  };

  handleFilter = e => {
    const arrPizzas = this.props.pizzas;
    const newChangedArr = arrPizzas.filter(function(pizza) {
      return (
        pizza.toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1
      );
    });

    this.setState({ filteredpizzas: newChangedArr });
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
          pizzas={this.state.filteredpizzas}
        />
        <PizzaList pizzas={this.state.filteredpizzas} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { pizzas: state.pizzas };
};
export const ConnectedApp = connect(
  mapStateToProps,
  { fetchPizzas }
)(App);
