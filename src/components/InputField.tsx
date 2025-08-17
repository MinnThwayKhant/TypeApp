import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="flex relative md:w-[50%] w-[80%] justify-center" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }
    } >
      <input type="text" placeholder="Enter Task" className="bg-white py-4 px-3 w-full outline-none rounded" value={todo} 
      onChange={e => setTodo(e.target.value)}/>
      <button type="submit" className="bg-black text-white p-3 rounded top-1 right-1 absolute cursor-pointer hover:p-2 hover:top-[10px] hover:right-[10px] hover:text-sm">Confirm</button>
    </form>
  )
}

export default InputField