import React , {useRef , useState , useContext} from 'react'
import "./popUp.scss"
import { IoCloseOutline } from "react-icons/io5";
import { TaskContext } from '../context/TaskContext';
import axios from 'axios';

function popUp() {

  const {task , setTask} = useContext(TaskContext);

  const [taskTitle , setTaskTitle] = useState("");

  const [subTitle , setSubTitle] = useState("");

  const item = useRef()


  const taskAdd = ()=> {
    setTask(false);

    axios.post('https://66bda93c74dfc195586d2dab.mockapi.io/user-tasks', {
      title : `${item.current.value}`,
    })
    .then(res => console.log(res.data))

  }

  return (
    <div className='pop-up-con'>
      <div className="pop-up">
        <IoCloseOutline className='close-icon' onClick={()=> setTask(false)}/>
        <input type="text" id='task-adder' ref={item} placeholder='Enter'/>
        <button className='add-task-btn'onClick={taskAdd}>Add Your Task</button>
      </div>
    </div>
  )
}

export default popUp