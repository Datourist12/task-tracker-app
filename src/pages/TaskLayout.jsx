import React, { useMemo, useState } from "react";
import Task from "./Task";

// receive an array of task objects
const tasks = [
  {
    title: "Buy groceries",
    description: "mik, eggs, butter, bread",
    due: "April 21, 2023 at 12:00:00 AM UTC-4",
    status: "in progress",
    user: "Shelley@gmail.com",
  },
  {
    title: "Buy Clothes",
    description: "shirt, pants, leggings, shoes",
    due: "April 19, 2023 at 12:00:00 AM UTC-4",
    status: "complete",
    user: "Shelley@gmail.com",
  },
  {
    title: "Buy sports stuff",
    description: "soccer ball, football, basketball",
    due: "April 24, 2023 at 12:00:00 AM UTC-4",
    status: "in progress",
    user: "Shelley@gmail.com",
  },
];

// should add this function to utils down the road
function sortTasks(sortBy, tasks) {
  switch (sortBy) {
    case "title":
      return tasks.sort((taskA, taskB) => {
        if (taskA.title < taskB.title) {
          return -1;
        }
        if (taskA.title > taskB.title) {
          return 1;
        }
        return 0;
      });
    case "status":
      let status = {
        "in progress": 1,
        complete: 2,
      };
      return tasks.sort(
        (taskA, taskB) => status[taskA.status] - status[taskB.status]
      );
    case "due":
      return tasks.sort((taskA, taskB) => {
        let firstDate = convertServerTimetoDate(taskA.due);
        let secondDate = convertServerTimetoDate(taskB.due);

        return firstDate - secondDate;
      });
    default:
      return tasks
  }
}

function convertServerTimetoDate(serverTime) {
  const date = new Date(serverTime.split("at").join(" "));
  return date;
}

const TaskLayout = () => {
  const [sort, setSorted] = useState("due");
  const sortedTasks = useMemo(() => sortTasks(sort, tasks), [sort]);


  function handleSelectSort (e) {
    setSorted(e.target.value)
  }

  return (
    <div>
      <h3>Tasks Container</h3>
      <select onChange={handleSelectSort}>
        <option value='title'>Title</option>
        <option value='status'>Status</option>
        <option value='due'>Due Date</option>
      </select>
      {tasks.length === 0 ? (
        <></>
      ) : (
        sortedTasks.map((task, idx) => (
          <Task key={task.title + idx} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskLayout;
