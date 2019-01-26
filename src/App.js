import React, { Component } from "react";
import fetchPizzaList from "./services/fetchPizza";
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
    return <div>Hello</div>;
  }
}

export default App;
