import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
    params: {
      "nutrition-type": "cooking",
      "category[0]": "generic-foods",
      "health[0]": "alcohol-free",
    },
    headers: {
      "X-RapidAPI-Key": "ff32dd62e8msh69bffe2efa7908cp111469jsnc6822a75ba82",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.hints);
      setIsLoading(true);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};

// {"description": "Cheese", "id": 1, "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550", "name": "Margherita", "price": 3, "quantity": 1, "sizeandcrust": [{"mediumPan": [Array], "mediumstuffedcrustcheesemax": [Array], "mediumstuffedcrustvegkebab": [Array]}], "veg": true}

export default useFetch;
