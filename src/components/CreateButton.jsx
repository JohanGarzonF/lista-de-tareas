import { useContext } from "react"
import { TaskContext } from "../pages/context/TaskContex"

const CreateButton = () => {

  const { setOpenForm } = useContext(TaskContext)

  const onClickButton = () => {
    setOpenForm(prevState => !prevState)
  }

  return (
    <button
      className="z-10 flex justify-center items-center rounded-full bg-gray-500 h-16 w-16 text-gray-200 fixed right-4 bottom-4 font-extrabold text-xl"
      onClick={onClickButton}
    >+</button>
  )
}
export default CreateButton