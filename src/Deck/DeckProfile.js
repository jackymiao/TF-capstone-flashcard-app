import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import CardList from "../Deck/CardList";
import AddCard from "../Deck/AddCard";
import EditCard from "../Deck/EditCard";
import EditDeck from "../Deck/EditDeck";
import Study from "../Deck/Study";

function DeckProfile({
  Switch,
  Route,
  readDeck,
  useParams,
  useState,
  useEffect,
  useRouteMatch,
  createCard,
  updateCard,
  readCard,
  deleteCard,
  updateDeck,
  setCurrentPath,
  currentPath
}) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
 
  const [deckData, setDeckData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((deck) => setDeckData(deck));
    readDeck(deckId)
      .then((deck) => deck.cards)
      .then((cards) => setCardData(cards));
  }, [currentPath]);
  const cardNum = cardData.length;

  function addCard(newCard) {
    createCard(deckId, newCard).then();
    // setCardData([
    //     ...cardData,
    //     newCard
    //   ])
  }

  function editCard(newCard) {
    updateCard(newCard).then();
  }

  function deleteCardById(cardId) {
    deleteCard(cardId).then();
  }

  function editDeck(updatedDeck) {
    updateDeck(updatedDeck).then();
  }

  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact>
          <h1>{deckData.name}</h1>
          <p>{deckData.description}</p>
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
          <button type="button">Delete</button>
          <h1>Cards</h1>
          <CardList
            cardData={cardData}
            url={url}
            deleteCardById={deleteCardById}
          />
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddCard
            addCard={addCard}
            deckName={deckData.name}
            url={url}
            setCurrentPath={setCurrentPath}
          />
        </Route>
        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard url={url} editCard={editCard} readCard={readCard} />
        </Route>
        <Route path={`${url}/edit`}>
          <EditDeck
            setCurrentPath={setCurrentPath}
            editDeck={editDeck}
            currentDeck={deckData}
            deckId={deckId}
          />
        </Route>

        <Route path={`${url}/study`}>
            <Study cardData={cardData} name={deckData.name} cardNum={cardNum}/>
          </Route>
      </Switch>
    </div>
  );
}

export default DeckProfile;
