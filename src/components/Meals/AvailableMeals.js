import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import classes2 from "./spinner.module.css";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      setError(null);
      const res = await fetch(
        "https://react-meals-b5a40-default-rtdb.firebaseio.com/meals.json"
      );

      // console.log(res);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      const loaded_meals = [];

      for (let key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        };
        loaded_meals.push(meal);
      }

      setTimeout(() => {
        setMeals(loaded_meals);
        setIsLoading(false);
      }, 1000);
    };

    fetchMeals().catch((err) => {
      setTimeout(() => {
        setError(err.message);
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  const mealsList = meals.map((el) => (
    <MealItem
      key={el.id}
      id={el.id}
      name={el.name}
      descp={el.description}
      price={el.price}
    />
  ));

  let body;

  if (isLoading) {
    body = (
      <div className={`${classes.roller}`}>
        <div className={classes2.roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    body = <p className={classes.error}>{error}</p>;
  }

  if (!isLoading && mealsList.length > 0) {
    body = mealsList;
  }

  return (
    <div className={classes.meals}>
      <Card>{body}</Card>
    </div>
  );
}

export default AvailableMeals;
