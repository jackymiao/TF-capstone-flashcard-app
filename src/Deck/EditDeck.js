import React, { useState } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";

function EditDeck({ editDeck, currentDeck}) {

    
    
    const history = useHistory();
    
    
    const [formData, setFormData] = useState(currentDeck);
    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    
    function submitHandler(event) {
        event.preventDefault();
        editDeck(formData);
        history.goBack();
    }
  
    return (
      <div>
        <h1>Edit Deck</h1>
        <form onSubmit={submitHandler}>

          <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={changeHandler}
              className="form-control"
            />

          </div>
          <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={changeHandler}
              className="form-control"
            />

          </div>
          <div>

          <button type="button" onClick={()=>history.goBack()} className="btn btn-secondary button">Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default EditDeck;
  