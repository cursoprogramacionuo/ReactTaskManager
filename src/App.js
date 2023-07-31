import './App.css';
import { useState, useRef } from "react";
import DetailsOfTasksComponent from './Components/DetailsOfTaskComponent';
import ListOfTasksComponent from './Components/ListOfTasksComponent';
import CreateTaskComponent from './Components/CreateTaskComponent';
import { Routes, Route, Link } from 'react-router-dom';

let App = () => {

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




  return (
    <div className="container">
      <nav>
        <ul className='navbar'>
          <li><Link to="/">Tasks</Link></li>
          <li><Link to="/createTask">Add Task</Link></li>
        </ul>
      </nav>
      <Routes>

        <Route path="/" element={
          <ListOfTasksComponent setTasks={setTasks} tasks={tasks} />
        }></Route>

        <Route path="/createTask" element={
          <CreateTaskComponent tasks={tasks} setTasks={setTasks}/>
        }>
        </Route>

        <Route path="/detailsTask/:name" element={
          <DetailsOfTasksComponent tasks={tasks}/>
        }>
        </Route>
      </Routes>
    </div>
  )
  ;
}

export default App;
