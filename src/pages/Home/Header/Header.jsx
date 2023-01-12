import { useContext } from "react"
import CreateButton from "../../../components/CreateButton"
import { TaskContext } from "../../context/TaskContex"

const Header = () => {
  const {totalTasks, completedTasks} = useContext(TaskContext)

  return (
    <header className="flex p-3 rounded-xl flex-col items-center sm:w-6/12 ml-10 mr-10 sm:m-auto bg-gray-700 sm:mb-2 relative">
      <h1 
        className="text-2xl uppercase mb-4 font-semibold text-white"
      >Tareas</h1>
      <h3
        className="uppercase mb-4 font-semibold text-white"
      >Has completado {completedTasks} de {totalTasks}</h3>
    </header>
  )
}
export default Header