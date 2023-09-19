import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
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

  useEffect(() => {
    async function fetchData() {
      try {
        const dataFromApi = await listDecks();
        setDeckData(dataFromApi.data);
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);
      }
    }
    
    // Call the async function
    fetchData();    
  }, []);
  //!!! don't use location to see what will happen
//
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
            {deckData.length>0&&<DeckList deckData={deckData} Link={Link} deleteDeck={deleteDeck} setDeckData={setDeckData} />}
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
