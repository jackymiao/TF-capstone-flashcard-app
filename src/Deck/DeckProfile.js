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
  deleteDeck
}) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  let location = useLocation();

  const [deckData, setDeckData] = useState({});
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
    if (
      window.confirm("Delete this card?\nYou will not be able to recover it.")
    ) {
      deleteCard(cardId).then();
      const updatedCardData = cardData.filter((c) => c.id !== Number(cardId));
      setCardData(() => updatedCardData);
    }
  }

  const deleteHandler = (event) => {
    if(window.confirm("Delete this deck?\nYou will not be able to recover it.")){
      deleteDeck(event.target.id).then();
  }};


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
                    &#9998; Edit
                  </Link>
                </button>
                <button className="btn btn btn-primary rounded button">
                  <Link to={`${url}/study`} className="text-white">
                    &#x1F4DA; Study
                  </Link>
                </button>
                <button className="btn btn btn-primary rounded">
                  <Link to={`${url}/cards/new`} className="text-white">
                    &#10010; Add cards
                  </Link>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" id={deckData.name} onClick={deleteHandler} className="btn btn-danger text-white">
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
          <Study
            cardData={cardData}
            name={deckData.name}
            cardNum={cardNum}
            url={url}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default DeckProfile;
