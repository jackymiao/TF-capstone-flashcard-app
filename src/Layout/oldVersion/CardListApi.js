import React, {useEffect, useState} from "react";
import {readDeck} from "../../utils/api/index";

import {useParams, Switch, Link, useRouteMatch} from "react-router-dom";


function CardListApi({deckId}){

    const { url } = useRouteMatch();
    deckId = Number(deckId)
    const [currentDeck, setCurrentDeck] = useState([]);
    const cardNum = 1;

    useEffect(()=>{
        readDeck(deckId).then(deckFromApi=>setCurrentDeck(deckFromApi))
        console.log(currentDeck)
    },[])

    return <div>
        <h1>{currentDeck.name}</h1>
          <p>{currentDeck.description}</p>
          <p>{cardNum} cards</p>
          <button>
            <Link to={`${url}/edit`}>Edit</Link>
          </button>
          <button>
            <Link to={`${url}/study`}>Study</Link>
          </button>
          <button>
            <Link to={`${url}/cards/new`}>Add cards</Link>
          </button>
          <button type="button" >Delete</button>
          <h1>Cards</h1>
        </div>
}

export default CardListApi;