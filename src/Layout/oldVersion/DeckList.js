import React from "react";
import { Link } from "react-router-dom";

function DeckList({ deckData, cardData }) {
  const deckList = deckData.map((deck) => (
    <div key={deck.id}>
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <button>
        <Link to={`/decks/${deck.id}`}>View</Link>
      </button>
      <button>
        <Link to={`/decks/${deck.id}/study`}>Study</Link>
      </button>
    </div>
  ));
  return (
    <div>
      <button>
        <Link to={`/`}>Home</Link>
      </button>
      <button>
        <Link to="/decks/new">Add Deck</Link>
      </button>
      <div>{deckList}</div>
    </div>
  );
}

export default DeckList;
