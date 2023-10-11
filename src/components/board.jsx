import Task from "./task";

function Board(props){

    return(
        <div className="Board">
        {props.tasks.map(task =>
            <Task task={task} removeTask={props.removeTask} completeTask={props.completeTask}></Task>)}
        </div>
    )

}

export default Board;