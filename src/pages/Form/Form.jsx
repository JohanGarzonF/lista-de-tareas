import { useContext, useState } from "react"
import CheckBox from "../../components/CheckBox"
import { useChecked } from "../../hooks/useChecked"
import { TaskContext } from "../context/TaskContex"
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
  const { addTask, setOpenForm } = useContext(TaskContext)
  const initialState = {
    Trabajo: false,
    Hogar: false,
    Estudio: false
  }

  const [checked, handleClickCheckbox] = useChecked(initialState)

  const [text, setText] = useState('')
  const [date, setDate] = useState('')

  const onCancel = () => {
    setOpenForm(prevState => !prevState)
  }

  const onChangeText = (event) => {
    setText(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    let labels = []
    for(const item in checked){
      if(checked[item]){
        labels.push({
          text: item,
          id: uuidv4()
        })
      }
    }
    addTask({
      text: text,
      date: date,
      labels: labels
    })
    onCancel()
  }

  return (
    <form 
      className="bg-gray-300 h-3/6 w-6/12 rounded-md p-3"
      onSubmit={onSubmit}
    >
      <h3 className="text-xl text-gray-900 font-semibold">Escribe tu tarea</h3>
      <textarea
        className="bg-gray-600 text-white p-2 m-6 w-11/12 rounded-md"
        placeholder="Escribe una tarea"
        name="text-task" 
        id="text-task"
        value={text}
        onChange={onChangeText}
      />
      <div className="flex">
        <div className="flex flex-col w-6/12 pl-4">
          <CheckBox name='Trabajo' checked={ checked.Trabajo } setChecked={ handleClickCheckbox }/>
          <CheckBox name='Estudio' checked={ checked.Estudio } setChecked={ handleClickCheckbox }/>
          <CheckBox name='Hogar'  checked={ checked.Hogar } setChecked={ handleClickCheckbox }/>
        </div>
        <label id="expires">
          Plazo:
          <input
            className="ml-2 rounded-md"
            type="date"
            name="expires"
            id="expires"
            onChange={onChangeDate}
          />
        </label>
      </div>
      <div className="flex w-10/12 justify-between m-auto mt-6">
        <button
          className="flex justify-center items-center bg-gray-500 h-8 w-20 rounded-md hover:bg-red-500 text-white text-lg"
          type="button"
          onClick={onCancel}
        >cancelar</button>
        <button
          type="submit"
          className="flex justify-center items-center bg-gray-500 h-8 w-20 rounded-md hover:bg-blue-500 text-white text-lg"
        >guardar</button>
      </div>
    </form>
  )
}
export default Form