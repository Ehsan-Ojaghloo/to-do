import React from "react";
import "./tasks.css";

export default function Tasks() {
  // فانکشن حذف کردن تسک مورد نظر با آیدی

  return (
    <div className="tasks_container">
      <input type="checkbox" />
      <label> عنوان تسک </label>
      <button>
        <img src="/bin.png" alt="delete task" />
      </button>
    </div>
  );
}
