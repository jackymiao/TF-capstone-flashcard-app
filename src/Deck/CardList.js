import React from "react";
import {Link} from "react-router-dom";

function CardList({ cardData, url, deleteCardById}) {

    return (
        <div>
          {cardData
            .map((card) => (
              <div key={card.id}>
                <p>{card.front}</p>
                <p>{card.back}</p>
                <button>
                  <Link to={`${url}/cards/${card.id}/edit`}>
                  Edit
                  </Link>
                  </button>
                <button type="button" onClick={()=>deleteCardById(card.id)} >delete</button>
              </div>
            ))}
        </div>
      );
    }
    
    export default CardList;
    