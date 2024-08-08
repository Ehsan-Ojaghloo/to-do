import React, { useContext , useEffect } from "react";
import "./home.css";
import TodoSection from "../components/todo_section";
import { TaskContext } from "../context/TaskContext";
import NewTask from '../components/new_task';
import axios from "axios";

export default function home() {

  const {task} = useContext(TaskContext);

  const [tasks , setTasks] = useState([])

  useEffect(()=> {
    axios.get('https://66b4cde09f9169621ea466f4.mockapi.io/task')
    .then(res => setTasks(res.data))
  }, [])

  return (
    <>
    {task && <NewTask/>}
        {tasks.map((data)=>(
          <TodoSection key={data.id} title={data.title} subTitle={data.subTitle} color={data.color}/>
        ))}
    </>
  );
}
