import React, { useState } from 'react'
import { Input } from "antd";
import "antd/dist/antd.css";

export default function Search(props) {
    
    const queryHandler = event => {
        
        props.searchFood(event.target.value)
    }
    
    return (
        <div>
        <Input value={props.query} type="text" onChange={queryHandler} placeholder='Search for a food'/>
        </div>
    )
}
