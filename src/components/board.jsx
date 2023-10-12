import Task from "./task";

function Board(props){

    return(
        <div className="Board">
            {/* Отдельно создаём каждую задачу */}
        {props.tasks.sort(props.sort).map(task =>
        // Передаём всю логику через пропсы
        //Сортируем задачи по порядку
            <Task task={task} removeTask={props.removeTask} completeTask={props.completeTask}
            changeTask={props.changeTask} swapTasks={props.swapTasks}
            setCurrentTask={props.setCurrentTask}>
            </Task>)}
        </div>
    )

}

export default Board;