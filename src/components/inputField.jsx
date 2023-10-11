import { useState } from "react";

function InputField(props){

    const [newTitle, setNewTitle] = useState('');
    const [newText, setNewText] = useState(''); 

    function addTask(){

        props.addTask(newTitle, newText);

    }

    return(
        
        <div className="App">
            <input type='text' value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></input>

            <input type='text' value={newText} onChange={(e) => {setNewText(e.target.value)}}></input>

            <button onClick={addTask}>Добавить новую задачу</button>
        </div>

    )

}

export default InputField