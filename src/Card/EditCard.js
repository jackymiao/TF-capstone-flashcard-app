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
          <h1>Edit Card</h1>
        <form onSubmit={submitHandler}>
        <div className="mb-3">

 <label htmlFor="front" className="form-label">
            Front
            </label>
            <textarea
              name="front"
              id="front"
              defaultValue={formData.front}
              onChange={changeHandler}
              className="form-control"
            />
        </div>
         
        <div className="mb-3">

          <label htmlFor="back" className="form-label">
            Back
            </label>
            <textarea
              name="back"
              id="back"
              defaultValue={formData.back}
              onChange={changeHandler}
              className="form-control"
            />
        </div>

          <button type="button" onClick={() => history.push(url)} className="btn btn-secondary button">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
  
  export default EditCard;