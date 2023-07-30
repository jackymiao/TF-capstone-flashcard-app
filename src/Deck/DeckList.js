import React from "react";
import { Switch, Route } from "react-router-dom";



function DeckList({ deckData, Link, deleteDeck }) {
  const deleteHandler = (event) => {
    deleteDeck(event.target.id).then();
  };

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
      <button type="button" id={deck.id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  ));
  return (
    <div>
      <div>
        <button>
          <Link to="/decks/new">Add Deck</Link>
        </button>

        <div>{deckList}</div>
      </div>
    </div>
  );
}

export default DeckList;
