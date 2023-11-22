import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    task === "" ? console.log("Task Empty!") : setTaskList([...taskList, task]);
    setTask("");
  };

  const handleDelete = (t) => {
    const filteredList = taskList.filter((task) => task !== t);
    setTaskList(filteredList);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3>Basic Todo App Simulation</h3>
      <div>
        <input
          type="textbox"
          placeholder="Enter task"
          value={task}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div style={{ paddingTop: ".5em" }}>
        <input type="button" value="Add" onClick={handleClick}></input>
      </div>

      <div style={{ paddingTop: "1em" }}>
        {taskList.length ? (
          taskList.map((t, i) => {
            return (
              <div key={i}>
                <input type="checkbox"></input>
                {t}
                <span
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => handleDelete(t)}
                >
                  x
                </span>
              </div>
            );
          })
        ) : (
          <div style={{ fontSize: ".8em" }}>List Empty!</div>
        )}
      </div>
    </div>
  );
}
