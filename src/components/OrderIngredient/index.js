import React from "react";

const OrderItem = props => {
  let classNam = "";
  const ingredient = props.ingredient;
  const order = props.order;
  const key = props.index;
  switch (ingredient) {
    case "Meat":
      classNam = "btn  mb-2 mr-2 btn-secondary";
      break;
    case "Cheese":
      classNam = "btn  mb-2 mr-2 btn-danger";
      break;
    case "Bacon":
      classNam = "btn  mb-2 mr-2 btn-success";
      break;
    default:
      classNam = "btn  mb-2 mr-2 btn-warning";
  }

  return (
    <button type="button" className={classNam} key={key}>
      {ingredient}
      <span className="badge badge-light">{order[ingredient]}</span>
    </button>
  );
};

export default OrderItem;
