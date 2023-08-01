import React from "react";

function DeckInfo({deckData, url, deleteHandler, Link}){
    return      <div className="card-body border">
    <h1 className="card-title">{deckData.name}</h1>
    <p className="card-text">{deckData.description}</p>

    <div
      className="btn-toolbar justify-content-between"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group" role="group" aria-label="First group">
        <button className="btn btn-secondary button rounded">
          <Link to={`${url}/edit`} className="text-white">
            &#9998; Edit
          </Link>
        </button>
        <button className="btn btn btn-primary rounded button">
          <Link to={`${url}/study`} className="text-white">
            &#x1F4DA; Study
          </Link>
        </button>
        <button className="btn btn btn-primary rounded">
          <Link to={`${url}/cards/new`} className="text-white">
            &#10010; Add cards
          </Link>
        </button>
      </div>
      <div className="btn-group">
        <button type="button" id={deckData.id} onClick={()=>deleteHandler(deckData.id)} className="btn btn-danger text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
}

export default DeckInfo;