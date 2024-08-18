import React, { useContext, useEffect, useState } from 'react'
import "./App.scss"
import AddBtn from "./components/addBtn"
import PopUp from './components/popUp'
import { TaskContext } from './context/TaskContext'
import axios from 'axios'

function App() {

  const { task, setTask } = useContext(TaskContext)

  const [list, setList] = useState([]);

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

  return (
    <div className='app-con'>
      {task && <PopUp />}
      <AddBtn />
      {list.length !== 0 ? (list.map((data) => (
        <div className='task-list' key={data.id} >
          <ul>
            <h1> Tasks </h1>
            <div className="list-items">
              <li> <input type="checkbox" id='checkbox' /> {data.title}</li>
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
  )
}

export default App