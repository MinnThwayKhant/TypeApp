import { useState } from "react";
import type { Todo } from "../models"
import { MdEditNote } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};


export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

    const handleDone = (id : number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo));
    }

    const deleted = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


  return (
    <div className="lg:grid lg:grid-cols-2 mt-10 w-[50%] gap-10">
        {
            todos.map((t) => (
                <div className="2xl:w-87 w-full bg-white flex justify-between mt-10 lg:mt-0 items-center py-5 px-3" key={t.id}>
                    <p className={`text-black text-lg ${t.isDone ? 'line-through' : ''}`}>{t.todo}</p>
                    <div className="flex md:text-2xl text-3xl gap-1">
                        <MdEditNote className="hover:opacity-70 cursor-pointer"/>
                        <MdOutlineDeleteOutline className="hover:opacity-70 cursor-pointer" onClick={()=>deleted(t.id)} />
                        {t.isDone ? <RxCross2 className="hover:opacity-70 cursor-pointer" onClick={() => handleDone(t.id)} /> : <MdOutlineDownloadDone className="hover:opacity-70 cursor-pointer" onClick={() => handleDone(t.id)} />}
                        
                    </div>
                </div>
            ))
        }
    </div>
  )
}
