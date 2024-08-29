import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskProvider from './context/TaskContext.jsx';
import App from './App.jsx'
import Labels from './pages/Labels.jsx';
import SidePanel from './components/sidePanel.jsx';
// import AddBtn from './components/addBtn.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <SidePanel />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/labels' element={<Labels />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>,
)
