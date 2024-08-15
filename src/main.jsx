import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskProvider from './context/TaskContext.jsx';
import App from './App.jsx'
// import AddBtn from './components/addBtn.jsx';
import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <App/>
    </TaskProvider>
  </React.StrictMode>,
)
