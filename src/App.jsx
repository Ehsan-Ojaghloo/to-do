import React, { useContext , useEffect , useState } from 'react'
import "./App.scss"
import AddBtn from "./components/addBtn"
import PopUp from './components/popUp'
import { TaskContext } from './context/TaskContext'
import axios from 'axios'

function App() {

  const {task , setTask} = useContext(TaskContext)

  const [list , setList] = useState([]);

  useEffect(()=>{
    axios.get('https://66bda93c74dfc195586d2dab.mockapi.io/user-tasks')
    .then(res => setList(res.data))
  }, [])

  return (
    <div className='app-con'>
      {task && <PopUp/>}
      <AddBtn/>
      {list.length !== 0 ? (list.map((data)=>(
        <div className='task-list' key={data.id} >
          <ul>
            <h1> Tasks </h1>
            <div className="list-items">
              <li> <input type="checkbox" id='checkbox'/> {data.title}</li>
            </div>
          </ul>
        </div>
      ))) : (
        <div className='empty-bg'>
          <img src="./no-task.png" alt="task" />
          <h3>You Have No Tasks</h3>
        </div>
      )}
    </div>
  )
}

export default App