import { useContext } from "react"
import { TaskContext } from "../pages/context/TaskContex"

const ItemList = ({ task }) => {

  const {completeTask, deleteTask} = useContext(TaskContext)

  return (
    <li
      className="rounded-md text-gray-300  bg-gray-700 border-solid border-2 border-gray-600 w-full mt-3 mb-3 pl-4 pr-4 h-auto relative"
      >
      <div className="flex items-center h-10">
        <button
          className={` ${task.completed ? 'bg-lime-600 text-white' : 'text-gray-700'} flex justify-center items-center rounded-full border-solid border-2 border-gray-600 h-6 w-6 hover:bg-lime-600 mr-3 `}
          onClick={() => completeTask(task.id)}
        ><i className="fa-solid fa-check"></i></button>
        <p className={`${task.completed && 'italic line-through'}`}>{task.text}</p>
        <button
          className="hover:text-red-500 absolute right-3"
          onClick={() => deleteTask(task.id)}
        ><i className="fa-solid fa-xmark"></i></button>
      </div>
      <ul className="block pt-3 pb-3 text-left">
        <li 
          className="flex"
        >
          <p className="mr-2">
            Vence: {task.date}
          </p>
        </li>
        <li 
          className="flex"
        >
          <p className="mr-2">
            Estado: {task.completed ? (<span>Terminado</span>):(<span>Pendiente</span>)}
          </p>
        </li>
        <li>
          Etiquetas:
          {
            task.labels.map(label => (
              <p key={label.id}>- {label.text}</p>
            ))
          }
        </li>
      </ul>
    </li>
  )
}
export default ItemList