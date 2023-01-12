import { useContext } from "react"
import { TaskContext } from "../pages/context/TaskContex"
import ItemList from "./ItemList"

const ListTask = () => {

  const { filteredTasks } = useContext( TaskContext )

  return (
    <ul className="sm:w-6/12 ml-10 mr-10 sm:m-auto m-auto mt-6 rounded-md flex items-center flex-col pt-2 pb-2 shadow min-h-80">
      {
        filteredTasks.map(task => (
          <ItemList key={task.id} task={task}/>
        ))
      }
    </ul>
  )
}
export default ListTask