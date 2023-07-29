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
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDeck;
