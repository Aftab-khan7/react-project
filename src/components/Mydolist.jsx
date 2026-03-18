import React, { useState } from "react";


function Mydolist() {
  
const [task, setTask] = useState(""); 
const [tasks, setTasks] = useState([]); 

// input change
function handleChange(e){
  setTask(e.target.value);
};

// addTask
function addTask() {
  if(task.trim() === "")return;

  setTasks([...tasks, task]);
  setTask("");
  };

  // Delete Task
function deleteTask(index) {
  const newTasks = tasks.filter((_,i) => i !== index);
  setTasks(newTasks);
};
  return(
    <div className="mydolist-section">
    <h2 className="pt-5">To Does All List</h2>
    <hr />

    <input type="text"
      placeholder="Enter Task here!"
      value={task}
      onChange={handleChange}
/>

<button onClick={addTask}>Add</button>

<ul className="addtask">
  {tasks.map((item, index)=>(<li className="dolist" key={index}>{item}<button className="btndelete" onClick={()=>deleteTask(index)}>Delete</button></li>
))}
</ul>

     </div>

);
}



export default Mydolist