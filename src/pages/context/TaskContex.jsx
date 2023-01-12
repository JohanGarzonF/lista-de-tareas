import { createContext, useId, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid'

export const TaskContext = createContext()

// const defaultTasks = [
//   {
//     id: 1,
//     text:'mi primera tarea',
//     completed: false,
//     labels : [{text: 'Estudio', id: 1},],
//   },
//   {
//     id: 2,
//     text:'mi segunda tarea',
//     completed: false,
//     labels : [{text: 'trabajo', id: 1}],
//   },
//   {
//     id: 3,
//     text:'mi tercera tarea',
//     completed: false,
//     labels : [{text: 'trabajo', id: 1}],
//   },
//   {
//     id: 4,
//     text:'mi cuarta tarea',
//     completed: false,
//     labels : [{text: 'trabajo', id: 1}],
//   },
//   {
//     id: 5,
//     text:'unica tarea',
//     completed: false,
//     labels : [{text: 'trabajo', id: 1}],
//   },
// ]

export const TaskProvider = ({children}) => {
  const [tasks, saveTasks] = useLocalStorage('TASKS_V1', [])
  const [inputValue, setInputValue] = useState('')
  const [openForm, setOpenForm] = useState(false)

  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length

  let filteredTasks = []

  if(!inputValue.length >= 1 ){
      filteredTasks = tasks
  } else {
    filteredTasks = tasks.filter(task => {
      return Object.keys(task).some(x => task[x].toString().toLowerCase().includes(inputValue.toLowerCase()))
    })
  }

  const addTask = (newTask) => {
    const newTasks = [...tasks]
    newTasks.push({
      id: uuidv4(),
      completed: false,
      text: newTask.text,
      labels: newTask.labels,
      date: newTask.date
    })
    saveTasks(newTasks)
  }

  const completeTask = (id) => {
    const index = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks[index].completed = true
    saveTasks(newTasks)
  }

  const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    saveTasks(newTasks)
  }

  return (
    <TaskContext.Provider value={{
      totalTasks,
      completedTasks,
      filteredTasks,
      inputValue,
      setInputValue,
      addTask,
      completeTask,
      deleteTask,
      openForm,
      setOpenForm
    }}>
      {children}
    </TaskContext.Provider>
  )
}