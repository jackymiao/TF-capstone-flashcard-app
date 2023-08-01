import React from "react";
import { Link, matchPath } from "react-router-dom";

function BreadCrumb({ location, decks }) {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/decks/new", name: "Create Deck" },
    { path: "/decks/:deckId", name: "Deck" },
    { path: "/decks/:deckId/edit", name: "Edit Deck" },
    { path: "/decks/:deckId/study", name: "Study" },
    { path: "/decks/:deckId/cards/new", name: "Add Card" },
    { path: "/decks/:deckId/cards/:cardId/edit", name: "Edit Card" },
  ];

  const getBreadcrumbLinks = (path) => {
    let pathParts = path.split("/").filter((p) => p);
    let accumulatedPath = "";
    return pathParts.map((part) => {
      accumulatedPath += `/${part}`;
      return accumulatedPath;
    });
  };

  const matchedRoutes = getBreadcrumbLinks(location.pathname)
    .map((path) => {
      for (let route of routes) {
        const match = matchPath(path, {
          path: route.path,
          exact: true,
        });
        if (match) {
          if (route.path === "/decks/:deckId") {
            const deck = decks.find(
              (deck) => deck.id === Number(match.params.deckId)
            );
            if (deck) {
              return { path, name: deck.name };
            }
          } else if (route.path === "/decks/:deckId/cards/:cardId/edit") {
            const cardId = Number(match.params.cardId);
            if (cardId) {
              return { path, name: `Edit Card ${cardId}` };
            }
          } else {
            return { path, name: route.name };
          }
        }
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li key="homelink" className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {matchedRoutes.map((route, index) => (
            <li key={index} className="breadcrumb-item">
              {route.path === location.pathname ? (
                <span>{route.name}</span>
              ) : (
                <Link to={route.path}>{route.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
