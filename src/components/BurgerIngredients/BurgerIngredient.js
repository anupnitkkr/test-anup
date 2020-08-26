import React from "react";
const List = props => {
  let items = [];
  Object.keys(props.ingredients).map(key => {
    let count = props.ingredients[key];
    let classNam = "BurgerIngredient__" + key;
    let newItems = [];
    for (let i = 0; i < count; i++) {
      newItems.push(i);
    }
    newItems.map((item, index) => {
      items.push(<div className={classNam} key={key + index} />);
    });
  });
  if (items.length == 0) {
    items.push(<p key={"no-index"}> Please add some ingredients </p>);
  }
  return items;
};
export default List;
