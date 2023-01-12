import { useState } from "react"

export const useChecked = (initialValue) => {
  const [checked, setChecked] = useState(initialValue)

  const handleClickChekbox = ({ target }) => {
    setChecked({
      ...checked,
      [target.name]: !checked[target.name]
    })
  }

  return [checked, handleClickChekbox]
}