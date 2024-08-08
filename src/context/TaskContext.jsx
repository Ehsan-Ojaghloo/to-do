import React, {useState , createContext} from "react";
export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const [task , setTask] = useState();

  return (
    <TaskContext.Provider value={{task , setTask}}>
      {children}
    </TaskContext.Provider>
  );
}
