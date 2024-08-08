import React , {useContext} from "react";

import "./new_task.css";

import { TaskContext } from "../context/TaskContext";

export default function new_task() {

  const {task , setTask} = useContext(TaskContext);

  function submit() {
    setTask(false);

    

  }

  return (
    <div className="pop_up">
      <input type="text" placeholder="Task Title..." />
      <select>
        <option value="checkbox"> checkbox </option>
        <option value="no-deadline"> unlimited time </option>
      </select>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
