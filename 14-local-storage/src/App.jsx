import React from "react";
 
const App =() =>{

const user = {
  username: 'shubham kumar',
  age: 21,
  city:'Jabalpur'
}

localStorage.setItem('user', JSON.stringify(user))
const usera = JSON.parse(localStorage.getItem('user'))

console.log(user)

  return(
    <div>App</div>
  )
}

export default App