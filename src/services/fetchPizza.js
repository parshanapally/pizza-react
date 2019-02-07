export const fetchPizzaList = () => {
  return fetch(`https://aquent-pizza-api.herokuapp.com/pizzas`).then(res =>
    res.json()
  );
};

export default fetchPizzaList;
