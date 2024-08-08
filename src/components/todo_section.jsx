import React from "react";
import "./todo_section.css";
import Tasks from "./tasks";

export default function TodoSection({title , subTitle , color}) {
  return (
    <>
    <div className="todo-container" style={{ backgroundColor: "green" }}>
      <h3>
        Done
      </h3>
      <Tasks />
    </div>
    </>
  );
}
