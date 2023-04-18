import React, { useEffect, useState } from "react";

const Task = ({ task }) => {

  return (
    <div className="task">
      <h2 className="title">{task.title}</h2>
      <p>{task.due}</p>
      <p>{task.status}</p>
      <p>{task.description}</p>
      <p>{task.user}</p>
    </div>
  );
};

export default Task;
