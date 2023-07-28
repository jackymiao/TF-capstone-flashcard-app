import React from "react";
import {Link} from "react-router-dom";


function CardList({ cardData, deckId, url }) {


  return (
    <div>
      {cardData
        .filter((card) => card.deckId === Number(deckId))
        .map((card) => (
          <div key={card.id}>
            <p>{card.front}</p>
            <p>{card.back}</p>
            <button>
              <Link to={`${url}/cards/${card.id}/edit`}>
              Edit
              </Link>
              </button>
            <button>delete</button>
          </div>
        ))}
    </div>
  );
}

export default CardList;


