import Task from "./task";

function Board(props){

    return(
        <div className="Board">
            {/* Отдельно создаём каждую задачу */}
        {props.tasks.map(task =>
        // Передаём всю логику через пропсы
            <Task task={task} removeTask={props.removeTask} completeTask={props.completeTask} changeTask={props.changeTask}>
            </Task>)}
        </div>
    )

}

export default Board;