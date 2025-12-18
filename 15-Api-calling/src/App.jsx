import React from "react"
import axios from "axios"
import { useState } from "react"
 


const App = () => {
  const [data, setdata] = useState([])

  const getData = async () =>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      
    setdata(response.data)
    console.log(response.data);
  }
  return (
    <div>
     <button onClick={getData}>Get Data</button>
     <div>
      {data.map(function(elem , idx){
        return <h3> Hello {idx}</h3>
      })}
     </div>
    </div>


  )
}

export default App