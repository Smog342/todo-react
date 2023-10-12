import { useState } from "react";


function Task(props){

    const [newTitle, setNewTitle] = useState(props.task.title);
    const [newText, setNewText] = useState(props.task.text);
    const [titleEditable, setTitleEditable] = useState(false);
    const [textEditable, setTextEditable] = useState(false);

    function completeTask(){

        props.completeTask(props.task.id);

    }

    function removeTask(){
        props.removeTask(props.task.id);
    }

    function changeTask(){

        props.changeTask(props.task.id, newTitle, newText);
        setTitleEditable(false);
        setTextEditable(false);

    }

    return(
        <div className={props.task.completed ? "Task Task-completed" : "Task"}>

            {titleEditable?
            
            <input type="text" value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></input> 
            :
            <h2 className="Task-header" onDoubleClick={() => (setTitleEditable(true))}>{props.task.title}</h2>
            }

            <div>

            {textEditable?

            <input type="text" value={newText} onChange={(e) => {setNewText(e.target.value)}}></input>
            :
            <p className="Task-text" onDoubleClick={() => (setTextEditable(true))}>{props.task.text}</p>

            }

            </div>

            <div>
            <button className="button-3" onClick={completeTask}>Выполнено</button>
            <button className="button-3" onClick={changeTask}>Изменить</button>
            <button className="button-3" onClick={removeTask}>Удалить</button>
            </div>
        </div>
    )

}

export default Task