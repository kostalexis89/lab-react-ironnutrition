// src/App.js
import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from 'react'
import foodsData from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function App() {
  const setInitialValue = () => {
    return foodsData
  }
  const [foods, setFoods] = useState(() => setInitialValue())
  const addNewFood = (newFood) => {
    // console.log('the new food is here')
    // console.log(newFood)
    setFoods([newFood, ...foods])
  }
  const foodsList = foods.map(food => {
    return (
      
      
      <FoodBox food={food}/>
      
    )
  })
  return <>
    <AddFoodForm addNewFood={addNewFood}/>
    <h3>Food list</h3>
    <div className='container'>
    {foodsList}
    </div>
  </>;
}
export default App;