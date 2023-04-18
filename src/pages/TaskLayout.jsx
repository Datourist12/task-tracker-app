import React from "react";
import Task from "./Task";

// receive an array of task objects

const TaskLayout = () => {
  return (
    <div>
      <h3>Tasks Container</h3>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskLayout;
