## Start
Click [HERE](https://flashcard-o-matic-vr6s.onrender.com) to view live website and create your own deck to start an exciting journey!

## Usage
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to http://localhost:3000.

## Features
1. Study Mode: Users can study a deck of cards. If there are fewer than 3 cards in the deck, they are prompted to add more cards before they can study.
2. Edit Deck: Users can edit the details of a deck.
3. Edit Card: Users can edit the front and back details of a card.
4. Add Card: Users can add a new card to a deck.
5. Card List: Displays a list of cards with options to edit or delete them.

## Description
- Home: Shows a list of decks with options to create, study, view, or delete a deck
@@ -14,3 +27,21 @@ Click [HERE](https://flashcard-o-matic-vr6s.onrender.com) to view live website a
- Edit Deck: Allows the user to modify information on an existing deck
- Add Card: 	Allows the user to add a new card to an existing deck
- Edit Card: Allows the user to modify information on an existing card

## Components
- Study.js: The main component that decides whether to show the study mode or prompt the user to add more cards.
- NoStudyCard.js: Displays a message when there aren't enough cards to study and provides a link to add more cards.
- StudyCard.js: Allows users to study the cards. Users can flip the card to see the other side and move to the next card.
- EditDeck.js: Provides a form to edit the details of a deck.
- AddCard.js: Provides a form to add a new card to a deck.
- EditCard.js: Provides a form to edit the details of a card.
- CardList.js: Displays a list of cards with options to edit or delete them.


## Future Enhancements
- Implement a search functionality to search through decks and cards.
- Add user authentication to allow multiple users to have their own decks.
- Implement a spaced repetition system for more efficient studying.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.