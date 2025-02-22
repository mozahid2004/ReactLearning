import React from 'react'
import { removeTodo } from '../Features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      {/* <div>Todo</div> */}
      <ul>
        {todos.map((todo) => (
          <li 
          key={todo.id}
          >
            {todo.text}

            <button 
            onClick={() => dispatch(removeTodo(todo.id))}
            >Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos