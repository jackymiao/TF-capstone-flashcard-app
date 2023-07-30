import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import CardList from "../Deck/CardList";
import AddCard from "../Deck/AddCard";
import EditCard from "../Deck/EditCard";
import EditDeck from "../Deck/EditDeck";
import Study from "../Deck/Study";
import "./DeckProfile.css";


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
}) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  let location = useLocation();

  const [deckData, setDeckData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((deck) => setDeckData(deck));
    readDeck(deckId)
      .then((deck) => deck.cards)
      .then((cards) => setCardData(cards));
  }, [location]);


  
  const cardNum = cardData.length;
  function addCard(newCard) {
    createCard(deckId, newCard).then();
    setCardData([...cardData, newCard]);
  }

  function editCard(newCard) {
    updateCard(newCard).then();
  }

  function deleteCardById(cardId) {
    if(window.confirm("Delete this card?\nYou will not be able to recover it.")){
      deleteCard(cardId).then();
      const updatedCardData = cardData.filter((c) => c.id !== Number(cardId));
      setCardData(() => updatedCardData);
    } 

  }

  function editDeck(updatedDeck) {
    updateDeck(updatedDeck).then();
  }

  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact>
          <div className="card-body border">
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
                    Edit
                  </Link>
                </button>
                <button className="btn btn btn-primary rounded button">
                  <Link to={`${url}/study`} className="text-white">
                    Study
                  </Link>
                </button>
                <button className="btn btn btn-primary rounded">
                  <Link to={`${url}/cards/new`} className="text-white">
                    Add cards
                  </Link>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-danger text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
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
          <Study cardData={cardData} name={deckData.name} cardNum={cardNum} url={url} />
        </Route>
      </Switch>
    </div>
  );
}

export default DeckProfile;
