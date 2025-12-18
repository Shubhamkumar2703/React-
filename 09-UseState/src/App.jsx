import React, { useState } from "react";
import Card from "./components/card";

const App = () =>{

  const [num, setNum] = useState(1)

  function increasNum(){
    setNum(num+1)
  }
   function decreaseNum(){
    setNum(num-1)
  }
   function jump5Num(){
    setNum(num+5)
  }
  return(
    <div className="parent">
      <Card/>
      <h1>{num}</h1>
    <div className="inner">
      
      <button onClick={increasNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump5Num</button>
    </div>
    </div>
  )
}
export default App