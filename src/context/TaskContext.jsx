import React, { useState, createContext } from "react";
import axios from "axios";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {

    const [task, setTask] = useState();
    const [label, setLabel] = useState();

    const [list, setList] = useState([]);

    const fetch_data = () => {
        axios.get('https://668fe602c0a7969efd9a0985.mockapi.io/users/user-task')
        .then(res => setList(res.data))
    }

    return (
        <TaskContext.Provider value={{ task, setTask, label, setLabel , fetch_data , list , setList}}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskProvider;