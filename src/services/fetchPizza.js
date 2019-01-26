export const fetchPizzaList = () => {
  return fetch(`https://aquent-pizza-api.herokuapp.com/pizzas`)
    .then(res => res.json())
    .catch(e => {
      throw new Error("Couldn't fetch pizzas");
    });
};
