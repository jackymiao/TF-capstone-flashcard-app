import React from "react";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import CardList from "./CardList";
import EditDeck from "./EditDeck";
import StudyDeck from "./StudyDeck";
import NavBar from "./NavBar";
import AddCard from "./AddCard";
import EditCard from "./EditCard";
import CardListApi from "./CardListApi";

function DeckProfile({ deckData, cardData, setCurrentUrl, editDeck, addCard, editCard, deleteDeck}) {
  const { url } = useRouteMatch();
  setCurrentUrl(() => url);
  const { deckId } = useParams();
  const currentDeck = deckData.find((deck) => deck.id === Number(deckId));
  const cardNum = cardData.filter(
    (card) => card.deckId === Number(deckId)
  ).length;
  const history = useHistory();
  // const deleteClick = () =>{
  //   deleteDeck(currentDeck)
  //   console.log("button clicked");
  //   history.goBack();
  // }

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
          <button type="button" >Delete</button>
          <h1>Cards</h1>
          <CardListApi deckId/>
          <CardList cardData={cardData} deckId={deckId} url={url} />
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
          <AddCard addCard={addCard} deckName={currentDeck.name} url={url} cardNum={cardNum} deckId={deckId} editCard={editCard}/>
        </Route>

        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard cardData={cardData} deckId={deckId} url={url} editCard={editCard} />
        </Route>

      </Switch>
    </div>
  );
}

export default DeckProfile;
