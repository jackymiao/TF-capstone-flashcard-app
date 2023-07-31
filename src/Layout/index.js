import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams,
  useLocation,
  useHistory
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
import BreadCrumb from "../Deck/BreadCrumb";

function Layout() {
  const { url } = useRouteMatch();
  const [deckData, setDeckData] = useState([]);
  let location = useLocation();
  const history = useHistory();

  useEffect(() => {
    listDecks().then((dataFromApi) => setDeckData(dataFromApi));
  }, [location]);

  // useEffect(() => {
  //   listDecks().then((dataFromApi) => setDeckData(dataFromApi));
  // }, [deckData]);


  function addDeck(newDeck) {
    createDeck(newDeck).then(()=>
    listDecks().then((dataFromApi) => setDeckData(dataFromApi))
    );

  }



  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/" exact>
            <DeckList deckData={deckData} Link={Link} deleteDeck={deleteDeck} setDeckData={setDeckData} />
          </Route>

          <Route path="/decks/new">
            <BreadCrumb location={location} decks={deckData} />
            <AddDeck addDeck={addDeck} homeUrl={url} />
          </Route>
          <Route path="/decks/:deckId">
            <BreadCrumb location={location} decks={deckData} />
            <DeckProfile
              Switch={Switch}
              Route={Route}
              useRouteMatch={useRouteMatch}
              useParams={useParams}
              useEffect={useEffect}
              useState={useState}
              readDeck={readDeck}
              createCard={createCard}
              ß
              updateCard={updateCard}
              readCard={readCard}
              deleteCard={deleteCard}
              updateDeck={updateDeck}
              deleteDeck={deleteDeck}
              
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
