import React from 'react'


type input ={
   input:string,
   setInput: React.Dispatch<React.SetStateAction<string>>
}
function Input({input,setInput}:input) {
  return (
    <input onChange={(e)=>setInput(e.target.value)}
    value={input}
        type="text" 
        placeholder="Add your new todo" 
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full" 
    />
  )
}

export default Input