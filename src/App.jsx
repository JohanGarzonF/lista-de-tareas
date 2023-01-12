import { useContext, useState } from 'react'
import './App.css'
import Modal from './components/Modal/Modal'
import { TaskContext } from './pages/context/TaskContex'
import Form from './pages/Form/Form'
import { Home } from './pages/Home'

function App() {

  const { openForm } = useContext(TaskContext)

  return (
    <div className="min-h-screen m-auto pt-4">
      <Home />
      {
        openForm && (
          <Modal>
            <Form />
          </Modal>
        )
      }
    </div>
  )
}

export default App
