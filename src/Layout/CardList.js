import React from "react";

function CardList({ cardData, deckId }) {
  return (
    <div>
      {cardData
        .filter((card) => card.deckId === Number(deckId))
        .map((card) => (
          <div key={card.id}>
            <p>{card.front}</p>
            <p>{card.back}</p>
            <button>Edit</button>
            <button>delete</button>
          </div>
        ))}
    </div>
  );
}

export default CardList;
