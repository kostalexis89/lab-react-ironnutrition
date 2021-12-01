// src/App.js
import "./App.css";
import React, { useState } from 'react'
import foodsData from "./foods.json";

function App() {
  const setInitialValue = () => {
    return foodsData
  }
  const [foods, setFoods] = useState(() => setInitialValue())
  const foodsList = foods.map(food => {
    return (
      <div>
         <p> {food.name} </p>
         <img src={food.image} width={'200px'} />
      </div>
    )
  })
  return <div className="App">
    <h3>Food list</h3>
    {foodsList}
  </div>;
}
export default App;