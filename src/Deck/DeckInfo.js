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
          <i class="bi bi-pencil"> Edit</i> 
          </Link>
        </button>
        <button className="btn btn btn-primary rounded button">
          <Link to={`${url}/study`} className="text-white">
          <i class="bi bi-book"> Study</i>
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
        <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
}

export default DeckInfo;