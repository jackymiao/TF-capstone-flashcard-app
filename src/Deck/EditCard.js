import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";


function EditCard({url, editCard, readCard}) {
    const { cardId } = useParams();
    const history = useHistory();

    const [formData, setFormData] = useState([]);

    useEffect(()=>{
        readCard(cardId).then(card=>setFormData(card))
    },[])



  
    const changeHandler = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    const submitHandler = (event) =>{
      event.preventDefault();
      editCard(formData)
      history.push(url)
    }
  
    return (
      <div>
        <form onSubmit={submitHandler}>
          <h1>Edit Card</h1>
          <label>
            Front
            <textarea
              name="front"
              id="front"
              defaultValue={formData.front}
              onChange={changeHandler}
            />
          </label>
          <label>
            Back
            <textarea
              name="back"
              id="back"
              defaultValue={formData.back}
              onChange={changeHandler}
            />
          </label>
          <button type="button" onClick={() => history.push(url)}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  
  export default EditCard;