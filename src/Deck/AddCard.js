import React, {useState} from 'react';
import {useHistory, useRouteMatch} from "react-router-dom";

function AddCard({deckName, addCard, deckId, setCurrentPath, url}){
    const history = useHistory();
    const initialFormData = {
        "deckId": Number(deckId),
        "front":"",
        "back":""
    };
    const [formData, setFormData] = useState(initialFormData)

    const [click, setClick] = useState("");

    function doneButton(event){
        setClick(event.target.name);
    
    }
    function saveButton(event){
       setClick(event.target.name);

    }

    const changeHandler = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        addCard(formData);
        click === "done"?history.push("/"):history.push(url);
    }

   

    return <div>
        <h1>{deckName}: Add Card</h1>
        <form  onSubmit={submitHandler}>
            <label>
                Front
                <textarea name="front" id="front" type="text" value={formData.front} onChange={changeHandler} />
            </label>
            <label>
                Back 
                <textarea name="back" id="back" type="text" value={formData.back} onChange={changeHandler} />
            </label>
            <button name="done" type="submit" onClick={doneButton}>Done</button>
            <button name="save" type="submit" onClick={saveButton}>Save</button>
        </form>
    </div>
}

export default AddCard;

