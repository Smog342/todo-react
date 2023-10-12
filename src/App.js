import logo from './logo.svg';
import './App.css';
import Task from './components/task';
import Board from './components/board';
import { useState } from 'react';
import InputField from './components/inputField';

function App() {

  const [tasks, setTasks] = useState([]); //список задач

  const [maxorder, setMaxorder] = useState(0); //порядковые номера для сортировки при драге

  const [currentTask, setCurrentTask] = useState(null);

  function addTask(title, text){ //логика добавления задачи

    if (title && text){ //если передаваемые заголовок и текст непустые

      //задать новую задачу со случайным ID, текущим допустимым порядковым номером; незавершённую
      let newTask = {id: Math.round(Math.random()*1000), order: maxorder,
        title: title, text: text, completed: false};

      //обновить список задач
      setTasks([...tasks, newTask])
      //обновить максимальный выдаваемый порядок
      setMaxorder(maxorder + 1);

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

  function swapTasks(task){

    setTasks([...tasks.map(
      (t) => {
        if (t.id === task.id){
          return {...t, order: currentTask.order}
        }
        if (t.id === currentTask.id){
          return {...t, order: task.order}
        }
        return t;
      }
    )])

  }

  function sortTasks(task1, task2){

    if (task1.order > task2.order){
      return 1;
    }else{
      return -1;
    }

  }

  return (
    <div className='App'>
      <header>
        <h1>todo-list superprosto</h1> 
      </header>

      {/* Прокидываем через пропы всю нужную логику */}

      <InputField addTask={addTask}></InputField>
      <Board tasks={tasks} removeTask={removeTask} completeTask={completeTask}
      changeTask={changeTask} swapTasks={swapTasks} sort={sortTasks}
      setCurrentTask={setCurrentTask}></Board>
    </div>
  );
}

export default App;
