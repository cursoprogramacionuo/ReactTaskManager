import './App.css';
import { useState, useRef } from "react";
import DetailsOfTasksComponent from './Components/DetailsOfTaskComponent';

let App = () => {
  let [name,setName] = useState("")
  let [place, setPlace] = useState("");
  let [priority, setPriority] = useState(0);

  let [tasks, setTasks] = useState([ 
    {
      name: "Task1",
      place: "School",
      priority: 0
    },
    {
      name: "Clean",
      place: "House",
      priority: 0
    }, 
  ])

  let addTask = () => {
    let newTask = {
      name: name,
      place: place,
      priority: priority
    }
    setTasks([...tasks, newTask])
    setName("")
    setPlace("")
    setPriority("")
  }

 
  return (
    <div className="container">
      <h1>List of Tasks</h1>
      <ul className='task-list'>
        { tasks.map( t => 
        <li key={ t.name}>{ t.name}</li>) }
      </ul>

      <div className="task-form">
        <h2>Add task</h2>
        <input type="text" placeholder='name' value={name} onChange={(e) => { setName(e.currentTarget.value) } }></input>
        <input type="text" placeholder='place' value={place} onChange={(e) => { setPlace(e.currentTarget.value) } }></input>
        <input type="number" placeholder='priority' value={priority} onChange={(e) => { setPriority(parseInt(e.currentTarget.value)) } }></input>
        <button onClick={addTask} > Add task </button>
      </div>

      <DetailsOfTasksComponent/>
    </div>
  )
  ;
}

export default App;
