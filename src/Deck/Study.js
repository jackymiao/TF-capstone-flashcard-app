import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Study({ cardData, name, cardNum, url }) {
  const history = useHistory();
  const [chooseCardId, setChooseCardId] = useState(0);
  function reset() {
    setChooseCardId(0);
  }

  function nextHandler() {
    chooseCardId < cardNum ? setChooseCardId(() => chooseCardId + 1) : reset();
    setFliped(false);
  }

  const [fliped, setFliped] = useState(false);
  function flipHandler() {
    fliped === false ? setFliped(true) : setFliped(false);
  }

  function confirmPop() {
    if (
      window.confirm(
        "Restart cards? \nClick 'cancel' to return to the home page."
      )
    ) {
      return reset();
    } else {
      return (window.location.href = "/");
    }
  }

  function renderStudyCard(chooseCardId, cardData) {
    if (cardData.length <= 2) {
      return (
        <div className="card-body border">
          <h2 className="card-title">Not enough cards.</h2>
          <p className="card-text">
            You need at least 3 carads to study. There are 2 cards in this deck.
          </p>
          <button className="btn btn btn-primary rounded button">
            <Link to={`${url}/cards/new`} className="text-white">
              Add Cards
            </Link>
          </button>
        </div>
      );
    } else if (chooseCardId >= cardData.length) {
      return confirmPop();
    } else {
      return (
        <div>
          <h3 className="card-title">
            Card {chooseCardId + 1} of {cardNum}
          </h3>
          {fliped === false ? (
            <div>
              <div className="card-text">{cardData[chooseCardId].front}</div>
              <button
                onClick={flipHandler}
                className="btn btn-secondary button rounded mt-3"
              >
                Flip
              </button>
            </div>
          ) : (
            <div>
              <div className="card-text">{cardData[chooseCardId].back}</div>
              <button
                onClick={flipHandler}
                className="btn btn-secondary button rounded mt-3"
              >
                Flip
              </button>
              <button
                onClick={nextHandler}
                className="btn btn-primary button rounded mt-3"
              >
                Next
              </button>
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>{name}: Study</h1>
      <div className="card">
        <div className="card-body border">
          {renderStudyCard(chooseCardId, cardData)}
        </div>
      </div>
    </div>
  );
}

export default Study;
