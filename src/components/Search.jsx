import { useContext, useId, useState } from "react"
import { TaskContext } from "../pages/context/TaskContex"

const Search = ({ filter_name }) => {

  const {inputValue, setInputValue} = useContext( TaskContext )

  const onChangeValue = value => {
    setInputValue(value)
  }

  console.log(inputValue)

  return (
    <section>
      <input
        id={useId()}
        type='radio'
        className="rounded-xl p-2 w-6/12 bg-zinc-600 text-white"
      />
    </section>
  )
}
export default Search