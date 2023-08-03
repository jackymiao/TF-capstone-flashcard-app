import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";

function EditCard({ url, editCard, readCard }) {
  const { cardId } = useParams();
  const history = useHistory();

  const [cardData, setCardData] = useState({});

  useEffect(() => {
    readCard(cardId).then((card) => setCardData(card));
  }, []);


  const submitHandler = (updatedCardData) => {
    editCard(updatedCardData);
    history.push(url);
  };

  const buttonOnLeft = (
    <button
      type="button"
      onClick={() => history.push(url)}
      className="btn btn-secondary button"
    >
      Cancel
    </button>
  );
  const buttonOnRight = (
    <button type="submit" className="btn btn-primary">
      Save
    </button>
  );
  return (
    <div>
      {cardData.id && (
        <CardForm
          initialFormData={cardData}
          submitHandler={submitHandler}
          history={history}
          url={url}
          header="Edit Card"
          buttonOnLeft={buttonOnLeft}
          buttonOnRight={buttonOnRight}
        />
      )}
    </div>
  );
}

export default EditCard;
