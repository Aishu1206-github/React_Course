import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  let fruits = [
    { name: "Apple", price: 100},
    { name: "Banana", price: 500 },
    { name: "Cherry", price: 200 },
    { name: "Pineapple", price: 100 },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <>
        <Fruit Name = {fruit.name} Price = {fruit.price} />
        </>
      ))}
    </div>
  );
}

export default Fruits;
