import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./AddCard.css";

function AddCard({ deckName, addCard, deckId, setCurrentPath, url }) {
  const history = useHistory();
  const initialFormData = {
    deckId: Number(deckId),
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [click, setClick] = useState("");

  function doneButton(event) {
    setClick(event.target.name);
  }
  function saveButton(event) {
    setClick(event.target.name);
  }

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addCard(formData);
    click === "done" ? history.push("/") : history.push(url);
  };

  return (
    <div>
      <h1>{`${deckName}`}</h1>
      <h1>Add Card</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            name="front"
            id="front"
            type="text"
            value={formData.front}
            onChange={changeHandler}
            placeholder="Front side of card"
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
            type="text"
            value={formData.back}
            onChange={changeHandler}
            placeholder="Back side of card"
            className="form-control"
          />
        </div>
        
        <button
          name="done"
          type="submit"
          onClick={doneButton}
          className="btn btn-secondary button"
        >
          Done
        </button>
        <button
          name="save"
          type="submit"
          onClick={saveButton}
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCard;
