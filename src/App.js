// src/App.js
import "./App.css";
import React, { useState } from 'react'
import foodsData from "./foods.json";
import FoodBox from "./FoodBox";

function App() {
  const setInitialValue = () => {
    return foodsData
  }
  const [foods, setFoods] = useState(() => setInitialValue())
  const foodsList = foods.map(food => {
    return (
      // <div>
      //    <p> {food.name} </p>
      //    <img src={food.image} width={'200px'} />
      // </div>
      <FoodBox food={food}/>
    )
  })
  return <>
    <h3>Food list</h3>
    {foodsList}
  </>;
}
export default App;