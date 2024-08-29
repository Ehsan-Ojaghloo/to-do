import React, { useRef, useState, useContext, useEffect } from 'react'
import "./popUp.scss"
import { IoCloseOutline } from "react-icons/io5";
import { TaskContext } from '../context/TaskContext';
import axios from 'axios';

function popUp() {

  const { task, setTask } = useContext(TaskContext);
  const { fetch_data } = useContext(TaskContext)


  const item = useRef()

  // axios.post('https://668fe602c0a7969efd9a0985.mockapi.io/users/user-task', {
  //   title: `${item.current.value}`,
  // })
  const taskAdd = async () => {
    setTask(false);

    if (item.current.value !== "") {
      try {
        const res = await axios.post('https://668fe602c0a7969efd9a0985.mockapi.io/users/user-task', {
          title: `${item.current.value}`,
        })
        console.log(res.data)
        fetch_data();
      }
      catch(error) {
        console.log(error)
      }
    } else {
      alert('Please fill the form')
    }

  }

  return (
    <div className='pop-up-con'>
      <div className="pop-up">
        <IoCloseOutline className='close-icon' onClick={() => setTask(false)} />
        <input type="text" id='task-adder' ref={item} placeholder='Enter' />
        <button className='add-task-btn' onClick={taskAdd}>Add Your Task</button>
      </div>
    </div>
  )
}

export default popUp