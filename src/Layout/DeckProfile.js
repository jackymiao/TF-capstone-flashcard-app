import React from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import CardList from "./CardList";
import EditDeck from "./EditDeck";
import StudyDeck from "./StudyDeck";
import NavBar from "./NavBar";
import AddCard from "./AddCard";

function DeckProfile({ deckData, cardData, setCurrentUrl, editDeck, addCard}) {
  const { url } = useRouteMatch();
  setCurrentUrl(() => url);
  const { deckId } = useParams();
  const currentDeck = deckData.find((deck) => deck.id === Number(deckId));
  const cardNum = cardData.filter(
    (card) => card.deckId === Number(deckId)
  ).length;
  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact>
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
          <button>Delete</button>
          <h1>Cards</h1>
          <CardList cardData={cardData} deckId={deckId} />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck
            setCurrentUrl={setCurrentUrl}
            editDeck={editDeck}
            currentDeck={currentDeck}
          />
        </Route>
        <Route path={`${url}/study`}>
          <StudyDeck deckId={deckId} setCurrentUrl={setCurrentUrl} />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddCard addCard={addCard} deckName={currentDeck.name} url={url} cardNum={cardNum} deckId={deckId}/>
        </Route>
      </Switch>
    </div>
  );
}

export default DeckProfile;
