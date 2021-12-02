import React, { useState } from 'react'
import "antd/dist/antd.css";
import { Input, Divider } from "antd";

export default function AddFoodForm({addNewFood}) {
    const setInitialValue = () => {
        return ''
    }
    const [name, setName] = useState(() => setInitialValue())
    const [image, setImage] = useState(() => setInitialValue())
    const [calories, setCalories] = useState(() => setInitialValue())
    const [servings, setServings] = useState(() => setInitialValue())
    const servingsHandler = event => {
        setServings(event.target.value)
    }
    const caloriesHandler = event => {
        setCalories(event.target.value)
    }
    const nameHandler = event => {
        setName(event.target.value)
    }
    const imageHandler = event => {
        setImage(event.target.value)
    }
    const handleSubmit = (event) => {
        //the next line prevent the browser of reloading
        event.preventDefault();
        //creating a new object
        const newFood = {
         name: name,
         image: image,
         calories: calories,
         servings: servings,
        };
        addNewFood(newFood)
    }
    return (
            <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>
            <Input value={name} type="text" onChange={nameHandler} placeholder='Name'/>
            <Input value={image} type="text" onChange={imageHandler} placeholder='Image Url'/>
            <Input value={calories} type="text" onChange={caloriesHandler} placeholder='calories'/>
            <Input value={servings} type="text" onChange={servingsHandler} placeholder='servings'/>
            <button type="submit">Create</button>
            </form>
      
    )
}