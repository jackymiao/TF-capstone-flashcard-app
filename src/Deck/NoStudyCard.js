import React from "react";
import { Link } from "react-router-dom";

function NoStudyCard({url, cardData}){
    return (
        <div className="card-body border">
          <h2 className="card-title">Not enough cards.</h2>
          <p className="card-text">
            You need at least 3 carads to study. There are {cardData.length} cards in this deck.
          </p>
          <button className="btn btn btn-primary rounded button">
            <Link to={`${url}/cards/new`} className="text-white">
            &#10010; Add Cards
            </Link>
          </button>
        </div>
      );
}

export default NoStudyCard;