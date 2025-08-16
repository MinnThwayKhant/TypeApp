import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App:React.FC = () => {

  const [todo, setTodo] = useState()

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center bg-black'>
        <span className='uppercase text-[30px] sm:text-[40px] text-white z-1 text-center py-20'>Taskify</span>
        <InputField />
      </div>
    </>
  )
}

export default App
