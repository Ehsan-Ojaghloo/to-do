import React, { useContext, useEffect, useState, useRef } from 'react'
import "./App.scss"
import AddBtn from "./components/addBtn"
import PopUp from './components/popUp'
import SidePanel from './components/sidePanel.jsx'
import { TaskContext } from './context/TaskContext'
import axios from 'axios'

function App() {

  const { task, setTask } = useContext(TaskContext)

  const [list, setList] = useState([]);

  const [check, setCheck] = useState([]);

  useEffect(() => {
    axios.get('https://668fe602c0a7969efd9a0985.mockapi.io/users/user-task')
      .then(res => setList(res.data))
  }, [])

  useEffect(() => {
    const keyClick = (event) => {
      if (event.key === "F2") {
        setTask(prevstate => !prevstate)
      }

    }

    document.addEventListener('keydown', keyClick)

    return () => {
      document.removeEventListener('keydown', keyClick)
    }
  }, [])

  function checking(event) {

    const newTask = list.map((data) =>
      data.id === event.target.id ? { ...data, checked: !data.checked } : data
    );
    setList(newTask);

    axios.put(`https://668fe602c0a7969efd9a0985.mockapi.io/users/user-task/${event.target.id}`, {
      checked: event.target.checked
    })
      .then(res => console.log(res.data))
  }

  return (
    <div className='app-con'>
      {task && <PopUp />}
      <AddBtn />
      <div className="maped">
        <SidePanel/>
        <div className="first-con">
          <div className='head-line'>
            <h1 className='head-text'> <ins>Tasks</ins> </h1>
          </div>
          {list.length !== 0 ? (list.map((data) => (
            <div className='task-list' key={data.id} >
              <ul>
                <div className="list-items">
                  <li> <input type="checkbox" id={data.id} onChange={(event) => checking(event)} checked={data.checked} /> {data.title}</li>
                </div>
              </ul>
            </div>
          ))) : (
            <div className='empty-bg'>
              <img src="./no-task.png" alt="task" />
              <h3>You Have No Tasks</h3>
              <p>Press " F2 " to add your Task.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App