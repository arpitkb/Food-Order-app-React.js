import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <div className={`${classes.card} card`}>
      <div className="card-body">
        <h2 className={`${classes.title} card-title`}>
          Delecious Food, Delivered to you
        </h2>
        <p className={`card-text`}>
          Choose your favourite meal from our broad selection odf available
          meals and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={`card-text`}>
          Choose your favourite meal from our broad selection odf available
          meals and enjoy a delicious lunch or dinner at home.
        </p>
      </div>
    </div>
  );
}

export default MealsSummary;
