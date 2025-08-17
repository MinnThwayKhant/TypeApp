import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import type { Todo } from './models'
import { TodoList } from './components/TodoList'
// import { TodoList } from './components/TodoList'

const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
      setTodos([...todos, {
        id: Math.floor(Math.random() * 1000),
        todo: todo,
        isDone: false,
      }])
      setTodo("")
    
  };
  console.log(todos)


  return (
    <>
      <div className='w-full h-screen flex flex-col items-center bg-black'>
        <span className='uppercase text-[30px] sm:text-[40px] text-white z-1 text-center py-20'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
