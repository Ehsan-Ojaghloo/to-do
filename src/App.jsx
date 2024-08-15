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
    <div>
      {task && <PopUp/>}
      <AddBtn/>
      {list.map((data)=>(
        <div key={data.id} style={{color: 'white'}}>
          <li>{data.title}</li>
        </div>
      ))}
    </div>
  )
}

export default App