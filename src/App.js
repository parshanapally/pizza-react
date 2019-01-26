import React, { Component } from "react";
import fetchPizzaList from "./services/fetchPizza";
import FilterForm from "./components/FilterForm";
import PizzaList from "./components/PizzaList";
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
        isLoad: true
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
    const newChangedArr = arrPizzas.filter(pizza =>
      pizza.toLowerCase().match(e.currentTarget.value)
    );
    this.setState({ filteredPizzas: newChangedArr });
  };
  render() {
    return (
      <div>
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
