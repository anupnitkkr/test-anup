import React from "react";
import List from "../BurgerIngredients/BurgerIngredient";
const BurgerBuilder = props => {
  console.log("called all the componet----------------");
  return (
    <div className="Burger__Burger">
      <div className="BurgerIngredient__BreadTop" />
      <List ingredients={props.ingredients} />
      <div className="BurgerIngredient__BreadBottom" />
    </div>
  );
};

export default BurgerBuilder;
