import React, { useState } from "react";
import { Link } from "react-router-dom";

function Study({ cardData, name, cardNum, url }) {
  const [chooseCardId, setChooseCardId] = useState(0);

  function reset() {
    console.log("out of card");
    setChooseCardId(() => 0);
  }

  function nextHandler() {
    chooseCardId < cardNum ? setChooseCardId(() => chooseCardId + 1) : reset();
    setFliped(false);
  }

  const [fliped, setFliped] = useState(false);
  function flipHandler() {
    fliped === false ? setFliped(true) : setFliped(false);
  }

  function renderStudyCard(chooseCardId){
    console.log(chooseCardId)
    if(chooseCardId <=2){
      return <div className="card-body border">
      <h2 className="card-title">Not enough cards.</h2>
      <p className="card-text">
        You need at least 3 carads to study. There are 2 cards in this
        deck.
      </p>
      <button className="btn btn btn-primary rounded button">
        <Link to={`${url}/cards/new`}></Link>
      </button>
    </div>
    }
    else if(chooseCardId >= cardData.length){
      return window.confirm("Restart cards?")
    } else{
      return <div>good</div>
    }
  }

  return (
    <div>
      <h1>{name}: Study</h1>
      <div className="card">
        <div className="card-body border">
          {/* {chooseCardId !== cardNum ? (
              fliped === false ? (
                <div>
          <h3 className="card-title">
            Card {chooseCardId + 1} of {cardNum}
          </h3>
                  <div className="card-text">{cardData[chooseCardId].front}</div>
                  <button onClick={flipHandler} className="btn btn-secondary button rounded mt-3">Flip</button>
                </div>
              ) : (
                <div>
                  <div className="card-text">{cardData[chooseCardId].back}</div>
                  <button onClick={flipHandler} className="btn btn-secondary button rounded mt-3">Flip</button>
                  <button onClick={nextHandler} className="btn btn-primary button rounded mt-3">Next</button>
                </div>
              )
            ) : (
              <div className="card-text">There is no more cards</div>
            )} */}
          {renderStudyCard()}
          <button onClick={nextHandler} className="btn btn-primary button rounded mt-3">Next</button>
              

          {/* {
            <div className="card-body border">
              <h2 className="card-title">Not enough cards.</h2>
              <p className="card-text">
                You need at least 3 carads to study. There are 2 cards in this
                deck.
              </p>
              <button className="btn btn btn-primary rounded button">
                <Link to={`${url}/cards/new`}></Link>
              </button>
            </div>} */}
         
        </div>
      </div>
    </div>
  );
}

export default Study;
