function Task(props){

    

    return(
        <div className="Task">
            <h2 className="Task-header">{props.title}</h2>
            <p>{props.text}</p>
            <button onClick={{}}>Выполнено</button>
            <button>Изменить</button>
            <button>Удалить</button>
        </div>
    )

}

export default Task