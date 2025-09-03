
import React, { useState } from "react";
import Child2 from "./Child2";
import Child1 from "./Child1";
const App = () => {
const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div  className="parent">
   <h1>Parent Component
</h1>

     <Child1 updated={setSelectedOption}/>
     <Child2 updated={setSelectedOption}/>
        <p>Selected Option: {selectedOption ? selectedOption : "None"}</p> 
    </div>
  )
}

export default App
