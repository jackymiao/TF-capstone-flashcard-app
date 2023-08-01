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
                      &#9998; Edit
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteCardById(card.id)}
                    className="btn btn-danger"
                  >
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
