import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams
} from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import {
  listDecks,
  createDeck,
  readDeck,
  updateDeck,
  deleteDeck,
  createCard,
  readCard,
  updateCard,
  deleteCard,
} from "../utils/api/index";

import DeckList from "../Deck/DeckList";
import DeckProfile from "../Deck/DeckProfile";
import AddDeck from "../Deck/AddDeck";




function Layout() {
  const {url} = useRouteMatch();
  const [deckData, setDeckData] = useState([]);



  useEffect(() => {
    listDecks().then((dataFromApi) => setDeckData(dataFromApi));
  }, []);

  function addDeck(newDeck){
    createDeck(newDeck).then();
  }


  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/" exact>
            <DeckList deckData={deckData} Link={Link} deleteDeck={deleteDeck} />
          </Route>

          <Route path="/decks/new">
            <AddDeck addDeck={addDeck} homeUrl={url} />
          </Route>
          <Route path="/decks/:deckId">
            <DeckProfile
              Switch={Switch}
              Route={Route}
              useRouteMatch={useRouteMatch}
              useParams={useParams}
              useEffect={useEffect}
              useState={useState}
              readDeck={readDeck}
              createCard={createCard}ß
              updateCard={updateCard}
              readCard={readCard}
              deleteCard={deleteCard}
              updateDeck={updateDeck}
            />
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
