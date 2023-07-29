import React, { useState } from "react";
import { useRouteMatch, Link, useHistory } from "react-router-dom";

function EditDeck({ setCurrentUrl, editDeck, currentDeck }) {
  const { url } = useRouteMatch();
  setCurrentUrl(() => url);

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
    editDeck(currentDeck, formData);
  }

  return (
    <div>
      <h1>Edit Deck</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={changeHandler}
          />
        </label>
        <button type="button" onClick={()=>history.goBack()}>Cancel</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditDeck;
