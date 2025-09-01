
import React, { useState } from "react";
import Child2 from "./Child2";
import Child1 from "./Child1";
const App = () => {
const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div >
   <h1>Lifting State Up Demo</h1>

     <Child1 updated={setSelectedOption}/>
     <Child2 updated={setSelectedOption}/>
        <p>Selected Option: {selectedOption ? selectedOption : "None"}</p> 
    </div>
  )
}

export default App
