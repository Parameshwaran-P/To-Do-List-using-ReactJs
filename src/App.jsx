import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputArea from './components/InputArea'

function App() {
  const [items, setItems] = useState([])
  
   const additems =(inpuText)=>{
     setItems((prev)=>{
      return[...prev, inpuText]
     })
   }
   console.log(items);
  return (
    <>
      <div className='container'>
         <div className="heading">
          <h1>To-Do List</h1>
         </div>
         <InputArea addItems={additems}/>
      </div>
        
    </>
  )
}

export default App
