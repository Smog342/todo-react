import { useState } from "react";

function InputField(props){

    const [newTitle, setNewTitle] = useState(''); //Состояния введённых значений
    const [newText, setNewText] = useState(''); 

    function addTask(){

        props.addTask(newTitle, newText); //В рамках компонента используем переданную логику
        setNewTitle("");                  //Внутри отдельной функции, которая обрабатывает клик кнопки
        setNewText("");

    }

    return(
        
        <div className="inputField">

            <input style={{margin: "2px"}} type='text' placeholder="Название задачи..." value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></input>

            <input style={{margin: "2px"}} type='text'  placeholder="Текст задачи..." value={newText} onChange={(e) => {setNewText(e.target.value)}}></input>

            <button style={{margin: "5px"}} className="button-3" onClick={addTask}>Добавить новую задачу</button>

        </div>

    )

}

export default InputField