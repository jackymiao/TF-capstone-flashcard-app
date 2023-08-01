import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NoStudyCard from "../Study/NoStudyCard";
import StudyCard from "../Study/StudyCard";

function Study({ cardData, name, cardNum, url }) {
  const history = useHistory();
  const [chooseCardId, setChooseCardId] = useState(0);

  function reset() {
    setChooseCardId(0);
  }

  function nextHandler() {
    setFliped(false);
    if (chooseCardId >= cardNum - 1) {
      return confirmPop();
    }
    chooseCardId < cardNum ? setChooseCardId(() => chooseCardId + 1) : reset();
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
      return <NoStudyCard cardData={cardData} url={url} />;
    } else {
      return (
        <StudyCard
          cardNum={cardNum}
          chooseCardId={chooseCardId}
          flipHandler={flipHandler}
          nextHandler={nextHandler}
          fliped={fliped}
          cardData={cardData}
        />
      );
    }
  }

  return (
    <div>
      <h1>{`${name}`}</h1>
      <h1>Study</h1>
      <div className="card">
        <div className="card-body border">
          {renderStudyCard(chooseCardId, cardData)}
        </div>
      </div>
    </div>
  );
}

export default Study;
