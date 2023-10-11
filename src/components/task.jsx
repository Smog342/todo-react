function Task(props){

    function completeTask(){

        props.completeTask(props.task.id);

    }

    function removeTask(){
        props.removeTask(props.task.id);
    }

    return(
        <div className={props.task.completed ? "Task Task-completed" : "Task"}>
            <h2 className="Task-header">{props.task.title}</h2>
            <h3>{props.task.id}</h3>
            <p>{props.task.text}</p>
            <button onClick={completeTask}>Выполнено</button>
            <button>Изменить</button>
            <button onClick={removeTask}>Удалить</button>
        </div>
    )

}

export default Task