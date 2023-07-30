import React, {useEffect} from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import {FontAawesomeIcon} from "@fortawesome/free-solid-svg-icons";

function NavBar({currentUrl}){
    return <div>
        <Link to="/">
        <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#216ef2",}} />
            Home</Link>
        <p>{currentUrl}</p>
        </div>
}

export default NavBar;
