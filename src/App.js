import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import Board from './components/board';
import { useState } from 'react';
import InputField from './components/inputField';

function App() {

  const [tasks, setTasks] = useState([]) //список задач

  function addTask(title, text){ //логика добавления задачи

    if (title && text){ //если передаваемые заголовок и текст непустые

      //задать новую задачу со случайным ID; незавершённую
      let newTask = {id: Math.round(Math.random()*1000), title: title, text: text, completed: false};

      //обновить список задач
      setTasks([...tasks, newTask])

    }

  }

  function removeTask(id){ //логика удаления задачи

    //удалить задачу по её ID...
    setTasks([...tasks.filter((task) => (task.id !== id))]);

  }

  function completeTask(id){ //логика завершения задачи

    //изменить свойство завершённости по ID
    setTasks([...tasks.map(
      (task) => (task.id === id ? {...task, completed: !task.completed} : {...task})
      )])

  }

  function changeTask(id, newTitle, newText){ //логика изменения задачи

    //изменить свойства "Заголовок" и "Текст" в соответствии с ID
    setTasks([...tasks.map(
      (task) => (task.id === id ? {...task, title: newTitle, text: newText} : {...task})
    )])

  }

  return (
    <div className='App'>
      <header>
        <h1>todo-list superprosto</h1> 
      </header>

      {/* Прокидываем через пропы всю нужную логику */}
      
      <InputField addTask={addTask}></InputField>
      <Board tasks={tasks} removeTask={removeTask} completeTask={completeTask} changeTask={changeTask}></Board>
    </div>
  );
}

export default App;
