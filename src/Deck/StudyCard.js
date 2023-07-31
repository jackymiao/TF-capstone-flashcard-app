import React from "react";

function StudyCard(
  {cardNum,
  chooseCardId,
  flipHandler,
  nextHandler,
  fliped,
  cardData}
) {
  return (
    <div>
      <h3 className="card-title">
        Card {chooseCardId + 1} of {cardNum}
      </h3>

      {fliped && <div className="card-text">{cardData[chooseCardId].back}</div>}

      {!fliped && (
        <div className="card-text">{cardData[chooseCardId].back}</div>
      )}

      <button
        onClick={flipHandler}
        className="btn btn-secondary button rounded mt-3"
      >
        Flip
      </button>
      {fliped && (
        <button
          onClick={nextHandler}
          className="btn btn-primary button rounded mt-3"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default StudyCard;
