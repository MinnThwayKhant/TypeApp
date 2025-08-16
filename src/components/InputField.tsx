const InputField = () => {
  return (
    <form className="flex relative md:w-[50%] w-[80%] justify-center">
      <input type="text" placeholder="Enter Task" className="bg-white py-4 px-3 w-full outline-none rounded"/>
      <button type="submit" className="bg-black text-white p-3 rounded top-1 right-1 absolute cursor-pointer hover:p-2 hover:top-[10px] hover:right-[10px] hover:text-sm">Confirm</button>
    </form>
  )
}

export default InputField