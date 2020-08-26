import React from "react";
const Ingredient = props => {
  let items = [];
  let styleName = {
    textdDecoration: "uppercase"
  };
  Object.keys(props.ingredients).map((key, index) => {
    let count = props.ingredients[key];
    items.push(
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={styleName}
        key={index}
      >
        {key}
        <span className="badge badge-primary badge-pill">{count}</span>
      </li>
    );
  });
  return items;
};
export default Ingredient;
