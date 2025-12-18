import React from "react";
import { useState } from "react";

const App = () =>{
const submitHandler =(e)=>{

  e.preventDefault( )

const copyTask = [...task]

copyTask.push({title,detailed})

setTask(copyTask)
console.log(copyTask);

  settitle('')
  setDetailed('')
}
 const deleteNote = (idx) =>{
  const copyTask = [...task];

  copyTask.splice(idx,1)
  setTask(copyTask)
 }


const [title, settitle] = useState('')
const [detailed, setDetailed] = useState('')
   
const [task, setTask] = useState([])

  
  return(
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex items-start p-10 lg:w-1/2 ">
        <div className="flex bg-black w-1/2 items-start  flex-col gap-4">
          <h1 className="font-bold text-3xl">Add Notes</h1>
          
          {/* PEHLA INPUT FOR HEADING  */}
          <input 
        type="text"
        placeholder="Enter Note Heading"
        className="p-5 w-full font-medium border-2 rounded outline-none px-5 py-2"
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />

         {/* DETAILED INPUT  */}
        <textarea
        type="text"
        className="p-5 w-full border-2  font-medium rounded outline-none px-5 py-2 h-29"
        placeholder="Write Details"
        value={detailed}
        onChange={(e)=>{
          setDetailed(e.target.value)
        }}
        />

       <button className="bg-white w-full active:scale-95 outline-none text-black px-5 py-2 rounded">Add Note</button>
        </div>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 bg-gray-900 items-start overflow-auto justify-start p-10">
      <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className=" flex flex-wrap gap-5 mt-5 overflow-auto h-full">
          
        {task.map(function(elem,idx){

          return <div key={idx} className="h-50 w-45 rounded-2xl text-black p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s')]">
                
                <div>
                   <h3 className=" leading-tight text-xl font-bold">{elem.title}</h3>
                   <p className="mt-3 leading-tight text-xs font-medium text-gray-500">{elem.detailed}</p>
                </div>
                 <button onClick={() =>{
                  deleteNote(idx)
                 }} className='align-baseline w-full cursor-pointer active:scale-95 bg-amber-950 py-1 text-xs rounded font-bold text-white'>Delete</button>
                
                </div>
        
        })}
        
        </div>
      </div>

    </div>
    
  )
}

export default App