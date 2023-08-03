import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./AddCard.css";
import CardForm from "./CardForm";

function AddCard({ deckName, addCard, deckId, url }) {
  const history = useHistory();
  const initialFormData = {
    deckId: Number(deckId),
    front: "Front side of card",
    back: "Backside of card",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [click, setClick] = useState("");

  function doneButton(event) {
    setClick(event.target.name);
  }
  function saveButton(event) {
    setClick(event.target.name);
  }

  const buttonOnLeft = (
    <button
      name="done"
      type="submit"
      onClick={doneButton}
      className="btn btn-secondary button"
    >
      Done
    </button>
  );
  const buttonOnRight = (
    <button
      name="save"
      type="submit"
      onClick={saveButton}
      className="btn btn-primary"
    >
      Save
    </button>
  );

  const submitHandler = (newCardData) => {
    addCard(newCardData);
    click === "done" ? history.push("/") : history.push(url);
  };

  return (
    <div>
      <CardForm
        initialFormData={initialFormData}
        submitHandler={submitHandler}
        buttonOnLeft={buttonOnLeft}
        buttonOnRight={buttonOnRight}
      />
    </div>
  );
}

export default AddCard;
