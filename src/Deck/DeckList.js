import React from "react";
import { Switch, Route } from "react-router-dom";


import "./DeckList.css";

function DeckList({ deckData, Link, deleteDeck }) {
  const deleteHandler = (event) => {
    deleteDeck(event.target.id).then();
  };

  const deckList = deckData.map((deck) => (
    <div key={deck.id} className="card-body border">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="card-title">{deck.name}</h1>
        <p className="text-muted">{deck.cards.length} Card</p>
      </div>
      <p className="card-text">{deck.description}</p>

      <div
        className="btn-toolbar justify-content-between"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary button rounded">
            <Link to={`/decks/${deck.id}`} className="text-white">
              View
            </Link>
          </button>
          <button type="button" className="btn btn btn-primary rounded">
            <Link to={`/decks/${deck.id}/study`} className="text-white">
              Study
            </Link>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            id={deck.id}
            onClick={deleteHandler}
            className="btn btn-danger text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <button className="btn btn-secondary">
          <Link to="/decks/new" className="text-white ">
            &#10010; Create Deck
          </Link>
        </button>

        <div className="card">{deckList}</div>
      </div>
    </div>
  );
}

export default DeckList;
