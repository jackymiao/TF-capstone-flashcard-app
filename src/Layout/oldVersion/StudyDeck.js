import React from "react";
import {useRouteMatch} from "react-router-dom";

function StudyDeck({deckId, setCurrentUrl}){
    const {url} = useRouteMatch();
    setCurrentUrl(()=>url);
    return <div>This is study page</div>
}

export default StudyDeck;