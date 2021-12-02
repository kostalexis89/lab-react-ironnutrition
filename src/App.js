// src/App.js
import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from 'react'
import foodsData from "./foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Button } from "antd";

function App() {
  const setInitialValue = () => {
    return foodsData
  }
  const [foods, setFoods] = useState(() => setInitialValue())
  const [hide, setHide] = useState(true)

  const addNewFood = (newFood) => {
    // console.log('the new food is here')
    // console.log(newFood)
    setFoods([newFood, ...foods])
    foodsData.push(newFood)
  }
 
  const handleHide = () => {
    // console.log('I am handling the Form')
    setHide(!hide)
  }
  console.log(hide)

 const searchFood = (searchText) => {
   setFoods(
     foodsData.filter((f) => 
      f.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) 
    )
   )
 }

  const deleteFood = (props) => {
    setFoods(
      foods.filter((f) => {
        if(f.name===props){
          return false
        } else {
          return true
        }
      } 
     )
    )
  }

  const foodsList = foods.map(food => {
    return (  
      <FoodBox food={food} deleteFood={deleteFood}/>    
    )
  })
  return <>
    {hide && <AddFoodForm addNewFood={addNewFood} hide={hide}/>}
    {hide && <Button id='hide' type="primary" onClick={handleHide}> Hide Form </Button> || <Button id='hide' type="primary" onClick={handleHide}> Show Form </Button>}

    <Search searchFood={searchFood}/>
    <h3 id='food-list'>Food list</h3>
    <div className='container'>
    {foodsList}
    </div>
  </>;
}
export default App;