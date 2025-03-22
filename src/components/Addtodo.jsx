import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



function Addtodo() {
    const[input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodohandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodohandler} className='space-x-3 mt-12'>
        <input type='text'  placeholder='enter todo' className='bg-gray-800 text-white rounded py-2 px-4 border-gray-700' value={input}
        onChange={(e)=>setInput(e.target.value)}   />
        <button type='submit' 
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
        AddTodo
        </button>
    </form>
    
  )
}

export default Addtodo
