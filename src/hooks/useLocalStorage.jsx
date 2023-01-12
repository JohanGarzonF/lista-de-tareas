import { useState } from "react"

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName)
  let parseItem

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = []
  } else {
    parseItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

  const saveItem = (newItem) => {
    const stringTasks = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringTasks)
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ]
}
export default useLocalStorage