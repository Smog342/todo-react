import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import Board from './components/board';
import { useState } from 'react';
import InputField from './components/inputField';

function App() {

  const [tasks, setTasks] = useState([])

  function addTask(title, text){

    let newTask = {id: Math.round(Math.random()*1000), title: title, text: text, completed: false};

    setTasks([...tasks, newTask])

  }

  function removeTask(id){

    setTasks([...tasks.filter((task) => (task.id !== id))]);

  }

  function completeTask(id){

    setTasks([...tasks.map(
      (task) => (task.id === id ? {...task, completed: !task.completed} : {...task})
      )])

  }

  return (
    <div className='App'>
      <InputField addTask={addTask}></InputField>
      <Board tasks={tasks} removeTask={removeTask} completeTask={completeTask}></Board>
    </div>
  );
}

export default App;
