import React, { useState } from "react";
import {useHistory, useRouteMatch} from "react-router-dom";

function AddDeck({addDeck, homeUrl}) {
  const history = useHistory();
  const {url} = useRouteMatch();
  const initialData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialData);
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    addDeck(formData);
    history.push(homeUrl)
  };


  // function submitHandler(event){
  //     event.preventDefault();
  //     setDeckData({...deckData, formData})
  // }

  return (
    <div>
      <h1>Create Deck</h1>
      <form onSubmit={submitHandler}>

<div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className="form-control"
            required
          />

</div>
<div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={changeHandler}
            className="form-control"
            required
          />

</div>
<button type="button" onClick={()=>history.push("/")} className="btn btn-secondary button">Cancel</button>

        <button type="submit" className="btn btn-primary button">Submit</button>
      </form>
    </div>
  );
}

export default AddDeck;
