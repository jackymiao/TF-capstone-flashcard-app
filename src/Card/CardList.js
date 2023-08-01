import React from "react";
import { Link } from "react-router-dom";
import "./CardList.css";

function CardList({ cardData, url, deleteCardById }) {
  return (
    <div>
      <h1>Cards</h1>
      <div className="card">
        {cardData.map((card) => (
          <div key={card.id} className="card-body border">
            <div className="row">
              <p className="text-muted col-6">{card.front}</p>

              <div className="col-6">
                <p className="text-muted">{card.back}</p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button className="btn btn-secondary me-md-2 button">
                    <Link
                      to={`${url}/cards/${card.id}/edit`}
                      className="text-white"
                    >
                      <i class="bi bi-pencil"> Edit</i> 
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteCardById(card.id)}
                    className="btn btn-danger"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
