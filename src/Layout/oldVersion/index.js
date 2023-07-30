import React, {useState, useEffect} from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from './oldVersion/DeckList';
import AddDeck from "./oldVersion/AddDeck";
import DeckProfile from "./oldVersion/DeckProfile";
import data from "../data/db.json"
import NavBar from "./oldVersion/NavBar";
import {listDecks} from "../utils/api/index"



function Layout() {
  
  

  // const[deckData, setDeckData] = useState(data.decks);
  const[cardData, setCardData] = useState(data.cards);
  const [currentUrl, setCurrentUrl] = useState("");
  // useEffect(()=>{
  //   setDeckData(()=>data.decks);
  //   setCardData(()=>data.cards);
  //   console.log("data changed")
  // },deckData)

  const[deckData, setDeckData] = useState([]);
  //const[cardData, setCardData] = useState([]);

  useEffect(()=>{
    listDecks().then(dataFromApi=>setDeckData(dataFromApi))
  },[])
 
  function addDeck(newDeck){
    setDeckData([
      ...deckData,
      newDeck
    ])
  }

  function editDeck(currentDeck, newDeckData){
    let updatedDeckData = deckData.map(d=>d===currentDeck?newDeckData:d);
    setDeckData(updatedDeckData)
  }

  function addCard(newCard){
    setCardData([
      ...cardData,
      newCard
    ])
  }

  function editCard(currentCard, newCard){
    let updatedCardData = cardData.map(c=>c===currentCard?newCard:c)
    setCardData(updatedCardData)
  }

  function deleteDeck(deckToDelete){
    let filteredDeck = deckData.filter(d=>d !== deckToDelete);
    setDeckData(filteredDeck);
  }

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/" exact>
            <DeckList deckData={deckData} cardData={cardData} />
          </Route>
          <Route path="/decks/new">
          <NavBar currentUrl={currentUrl} />
            <AddDeck setDeckData={setDeckData} addDeck={addDeck} deckData={deckData} />
          </Route>

          <Route path="/decks/:deckId">
            <NavBar currentUrl={currentUrl} />
            <DeckProfile deckData={deckData} cardData={cardData} editDeck={editDeck} setCurrentUrl={setCurrentUrl} addCard={addCard} editCard={editCard} deleteDeck={deleteDeck} />
          </Route>

          <Route>
        <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
