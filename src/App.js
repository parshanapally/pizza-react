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
  render() {
    return (
      <div>
        <FilterForm />
        <PizzaList />
      </div>
    );
  }
}

export default App;
