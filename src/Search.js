import React, { useState } from 'react'
import { Input } from "antd";
import "antd/dist/antd.css";

export default function Search({searchFood}) {
    const setInitialValue = () => {
        return ''
    }
    const [query, setQuery] = useState(() => setInitialValue())
    
    const queryHandler = event => {
        setQuery(event.target.value)
        searchFood(event.target.value)
    }
    
    return (
        <div>
        <Input value={query} type="text" onChange={queryHandler}/>
        </div>
    )
}
