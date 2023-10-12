import { useState } from "react";


function Task(props){

    const [newTitle, setNewTitle] = useState(props.task.title); //состояние заголовка
    const [newText, setNewText] = useState(props.task.text); //состояние текста
    const [titleEditable, setTitleEditable] = useState(false);
    const [textEditable, setTextEditable] = useState(false); //состоянии возможности редактирования

    function completeTask(){ //вызовы соответствующей логики, переданной по пропсам

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

    function dropHandler(e, task){ //вызов обмена задач при сбрасывании задачи на задачу

        e.preventDefault();
        props.swapTasks(task);


    }

    function dragEndHandler(e){ 

    }

    function dragOverHandler(e){

        e.preventDefault();

    }

    function dragStartHandler(e, task){  //запоминаем, какую задачу взяли

        props.setCurrentTask(task);

    }

    return(
        <div draggable="true"
        onDrop={(e) => {dropHandler(e, props.task)}} //события для драга
        onDragEnd={(e) => {dragEndHandler(e)}}
        onDragLeave={(e) => {dragEndHandler(e)}}
        onDragOver={(e) => {dragOverHandler(e)}}
        onDragStart={(e) => {dragStartHandler(e, props.task)}} 
        className={props.task.completed ? "Task Task-completed" : "Task"}>

            <div>

                {titleEditable? //если можно редактировать, открывает поле ввода
            
                <input type="text" value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></input> 
                :
                //в противном случае сам текст. Если по нему дважды кликнуть, можно будет редактировать
                <h2 className="Task-header" onDoubleClick={() => (setTitleEditable(true))}>{props.task.title}</h2>
                }

            </div>

            <div>

                {textEditable? //Аналогично

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