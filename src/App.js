import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import Board from './components/board';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([{title: "Задача 1", text: "Понять, что такое React"}, 
  {title: "Задача 2", text: "Сделать todo доску"}, 
  {title: "Задача 3", text: "В процессе не умереть, проверкааааааааааааааааааааааааааааааааааааааааа"},
  {title: "Задача 4", text: "Накидываем, набрасываем"}, 
  {title: "Задача 5", text: "В надежде, что всё работает так, как надо, но я-то знаю"}, 
  {title: "Задача 6", text: "Ещё чуть-чуть"}])

  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState(''); 

  function addTask(){

    let newTask = {title: newTitle, text: newText};

    let tasksCopy = [...tasks];
    tasksCopy.push(newTask);

    setTasks(tasksCopy);

  }

  return (
    <div className='App'>
      <input type='text' value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></input>
      <input type='text' value={newText} onChange={(e) => {setNewText(e.target.value)}}></input>
      <button onClick={addTask}>Добавить новую задачу</button>
      <Board tasks={tasks}></Board>
    </div>
  );
}

export default App;
