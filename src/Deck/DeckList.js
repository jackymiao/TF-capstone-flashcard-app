import React from "react";
import { Switch, Route } from "react-router-dom";


import "./DeckList.css";

function DeckList({ deckData, Link, deleteDeck, setDeckData}) {
  const deleteHandler = (id) => {
    if (
      window.confirm("Delete this deck?\nYou will not be able to recover it.")
    ) {
      const updatedDeckData = deckData.filter((c) => c.id !== Number(id));
      setDeckData(updatedDeckData);
      deleteDeck(id).then();
    }
  };

  const deckList = deckData.map((deck) => (
    <div key={deck.id} className="card-body border">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="card-title">{deck.name}</h1>
        <p className="text-muted">{`${deck.cards.length} cards`}</p>
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
            <i className="bi bi-eye-fill"> View</i>
            </Link>
          </button>
          <button type="button" className="btn btn btn-primary rounded">
            <Link to={`/decks/${deck.id}/study`} className="text-white">
            <i className="bi bi-book"> Study</i>
            </Link>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            id={deck.id}
            onClick={() => deleteHandler(deck.id)}
            className="btn btn-danger text-white"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <button className="btn btn-secondary mb-2">
          <Link to="/decks/new" className="text-white">
            &#10010; Create Deck
          </Link>
        </button>

        <div className="card">{deckList}</div>
      </div>
    </div>
  );
}

export default DeckList;
