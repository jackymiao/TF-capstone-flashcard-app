import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import CardList from "../Card/CardList";
import AddCard from "../Card/AddCard";
import EditCard from "../Card/EditCard";
import EditDeck from "../Deck/EditDeck";
import Study from "../Study/Study";
import "./DeckProfile.css";
import DeckInfo from "./DeckInfo";

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
  deleteDeck,
}) {
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  let location = useLocation();
  const history = useHistory();

  const [deckData, setDeckData] = useState({});
  const [cardData, setCardData] = useState([]);
//solution, use then return the data, and use data in next then
  useEffect(() => {
    readDeck(deckId)
  .then((deck) => {
    setDeckData(deck.data);
    return deck; // Return the deck object to pass it to the next .then()
  })
  .then((deck) => {
    if (deck.data.cards) {
      setCardData(deck.data.cards);
    }
  })
  .catch((error) => {
    // Handle errors here
    console.error('Error:', error);
  });
    //readDeck(deckId).then(deck=>setDeckData(deck.data)).then(deck=>setCardData(deck.data.cards));
  }, [location]);
  //(deck) => setDeckData(deck.data)
  // useEffect(()=>{
  //   setCardData(deckData.cards)
  // },[deckData])
  //check deckDdata

  //check cardData

  //readDeck(deckId)
  // .then((deck) => deck.data.cards)
  // .then((cards) => setCardData(cards));
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
      setCardData(updatedCardData);
    }
  }

  const deleteHandler = (id) => {
    if (
      window.confirm("Delete this deck?\nYou will not be able to recover it.")
    ) {
      deleteDeck(id).then();

      history.push("/");
    }
  };

  function editDeck(updatedDeck) {
    updateDeck(updatedDeck).then();
  }

  return (
    <div>
      <Switch>
        <Route path={`${url}`} exact>
          <DeckInfo
            deckData={deckData}
            url={url}
            deleteHandler={deleteHandler}
            Link={Link}
          />

          {cardData.length>0&&<CardList
            cardData={cardData}
            url={url}
            deleteCardById={deleteCardById}
          />}
        </Route>
        <Route path={`${url}/cards/new`}>
          <AddCard addCard={addCard} deckName={deckData.name} url={url} />
        </Route>
        <Route path={`${url}/cards/:cardId/edit`}>
          <EditCard url={url} editCard={editCard} readCard={readCard} />
        </Route>
        <Route path={`${url}/edit`}>
          {deckData.id && (
            <EditDeck
              editDeck={editDeck}
              currentDeck={deckData}
              deckId={deckId}
            />
          )}
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
