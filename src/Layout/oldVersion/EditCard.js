import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function EditCard({ cardData, url, editCard, deckId }) {
  const { cardId } = useParams();
  const history = useHistory();
  const currentCardList = cardData.filter(c=>c.deckId === Number(deckId));
  const currentCard = currentCardList.find((card) => card.id === Number(cardId));
  const [formData, setFormData] = useState(currentCard);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    editCard(currentCard, formData)
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
            defaultValue={currentCard.front}
            onChange={changeHandler}
          />
        </label>
        <label>
          Back
          <textarea
            name="back"
            id="back"
            defaultValue={currentCard.back}
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
