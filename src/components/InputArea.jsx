import React, { useState } from 'react'

const InputArea = (props) => {
    const [input, setInput] = useState("")

    const handleChange =(e)=>{
      setInput(e.target.value)  
      setInput("")
    }
  return (
    <div className='form'>
        <input type="text" onChange={handleChange} value={input}/>
        <button onClick={props.addItems(inputText)}>
            <span>Add</span>
        </button>

    </div>
  )
}

export default InputArea