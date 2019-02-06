import React, { Component } from "react";
import fetchPizzaList from "./services/fetchPizza";
import FilterForm from "./components/FilterForm";
import PizzaList from "./components/PizzaList";
import "./App.css";
import pizza from "./img/pizza.png";

class App extends Component {
  state = {
    load: false,
    pizzas: [],
    filteredPizzas: []
  };
  componentDidMount() {
    fetchPizzaList().then(res => {
      this.setState({
        pizzas: res.pizzas,
        filteredPizzas: res.pizzas,
        load: true
      });
    });
  }

  handleSort = () => {
    const arrPizzas = this.state.filteredPizzas;
    this.setState({
      filteredPizzas: [...arrPizzas].sort((a, b) =>
        a.toLowerCase() > b.toLowerCase() ? 1 : -1
      )
    });
  };

  handleFilter = e => {
    const arrPizzas = this.state.pizzas;

    const newChangedArr = arrPizzas.filter(function(pizza) {
      return (
        pizza.toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredPizzas: newChangedArr });
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
        <PizzaList pizzas={this.state.filteredPizzas} />
      </div>
    );
  }
}

export default App;
