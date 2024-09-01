import React from 'react'
import Todo from './Components/Todo/Todo'
import "./App.css"

function App() {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center bg'>
      <Todo/>
    </div>
  )
}

export default App