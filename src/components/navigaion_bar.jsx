import React , {useContext} from "react";
import "./navigation_bar.css";

import { TaskContext } from "../context/TaskContext";

export default function navigaion_bar() {

  const {task , setTask} = useContext(TaskContext);

  return (
    <nav>
      <div className="todos">
        <button>
          <img src="/todo.png" alt="toggle todo lists" />
        </button>
      </div>
      <div className="add">
        <button onClick={()=> setTask(true)}>
          <img src="/add.png" alt="add to the list" />
        </button>
      </div>
      <div className="share">
        <button>
          <img src="/share.png" alt="share with friends" />
        </button>
      </div>
    </nav>
  );
}
