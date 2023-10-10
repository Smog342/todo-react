import Task from "./task";

function Board(props){

    return(
        <div className="Board">
        {props.tasks.map(task =>
            <Task title={task.title} text={task.text}></Task>)}
        </div>
    )

}

export default Board;