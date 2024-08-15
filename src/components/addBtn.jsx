import React, { useContext } from 'react'
import "../components/addBtn.scss"
import { IoAdd } from "react-icons/io5";
import { TaskContext } from '../context/TaskContext';

function addBtn() {

  const {task , setTask} = useContext(TaskContext)

  return (
    <div className='add-button-con' onClick={()=> setTask(true)}>
        <IoAdd className='add-btn'/>
    </div>
  )
}

export default addBtn