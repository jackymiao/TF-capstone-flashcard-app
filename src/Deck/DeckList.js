import React from "react";
import { Switch, Route } from "react-router-dom";


import "./DeckList.css";

function DeckList({ deckData, Link, deleteDeck, setDeckData}) {
  const deleteHandler = (event) => {
    if(window.confirm("Delete this deck?\nYou will not be able to recover it.")){
      deleteDeck(event.target.id).then();
      const updatedDeckData = deckData.filter((c) => c.id !== Number(event.target.id));
      setDeckData(() => updatedDeckData);
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
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
