import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskProvider } from './pages/context/TaskContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)
