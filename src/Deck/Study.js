import React, { useState } from "react";

function Study({ cardData, name, cardNum }) {
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

  return (
    <div>
      {/* <h1>{name}: Study</h1>
      this is study page
<h4>{chooseCardId} of {cardNum}</h4>

     <button onClick={nextHandler}>Next</button>
     <h5>{chooseCardId===cardNum?"This is no more cards":cardData[chooseCardId].front}</h5> */}
     {chooseCardId!==cardNum?
      (fliped === false ? (
        <div>
          <div>{cardData[chooseCardId].front}</div>
          <button onClick={flipHandler}>Flip</button>
        </div>
      ) : (
        <div>
          <div>{cardData[chooseCardId].back}</div>
          <button onClick={flipHandler}>Flip</button>
          <button onClick={nextHandler}>Next</button>
        </div>
      )):<div>There is no more cards</div>}
    </div>
  );
}

export default Study;
