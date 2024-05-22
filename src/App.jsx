import { useState } from 'react'

import './App.css'
import InputArea from './components/InputArea'
import ToDoitem from './components/ToDoitem'

function App() {
  const [items, setItems] = useState([])
  
   const additems =(inputText)=>{
     setItems((prev)=>{
      return[...prev, inputText]
     })
   }

   const deleteItem = (id) =>{
       setItems((prev)=>{
        return prev.filter((item, index)=>{
          return index!==id
        })
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
         <div>
          <ul>
            {
              items.map((item, index)=>{
                return <ToDoitem key={index} text={item} deleteItem={deleteItem} id={index}/> 
              })
            }
          </ul>
         </div>
      </div>
        
    </>
  )
}

export default App
