import React, {useEffect} from 'react';
import {Link, useRouteMatch} from "react-router-dom";


function NavBar({currentUrl}){
    return <div>
        <Link to="/">Home</Link>
        <p>{currentUrl}</p>
        </div>
}

export default NavBar;
