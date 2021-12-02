// src/App.js
import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from 'react'
import foodsData from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";

function App() {
  const setInitialValue = () => {
    return foodsData
  }
  const [foods, setFoods] = useState(() => setInitialValue())

  const addNewFood = (newFood) => {
    // console.log('the new food is here')
    // console.log(newFood)
    setFoods([newFood, ...foods])
    foodsData.push(newFood)
  }
 

 const searchFood = (searchText) => {
   setFoods(
     foodsData.filter((f) => 
      f.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
    )
   )
 }

  const foodsList = foods.map(food => {
    return (  
      <FoodBox food={food}/>    
    )
  })
  return <>
    <AddFoodForm addNewFood={addNewFood}/>
    <Search searchFood={searchFood}/>
    <h3>Food list</h3>
    <div className='container'>
    {foodsList}
    </div>
  </>;
}
export default App;