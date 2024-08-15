import { useState } from "react";
import { ICard } from "../models/ICard";
  

export const GameBoard = () => {  
  const [cards, setCards] = useState<ICard[]>([]);
  const [flippedCards, setFlippedCards] = useState<{ index: number; card: ICard }[]>([]);
  const [matches, setMatches] = useState(0);
  


  const resetGame = () => {
    const gameCards: ICard[] = [
      {
        symbol: "🦊",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦊",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐞",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐞",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦖",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦖",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦄",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦄",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦇",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦇",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐝",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐝",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐖",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🐖",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦭",
        flipped: false,
        matched: false,
        front: "❔",
      },
      {
        symbol: "🦭",
        flipped: false,
        matched: false,
        front: "❔",
      },
    ];
    const shuffledCards = [...gameCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
}

  // gameCards.sort(() => 0.5 - Math.random());
  
  const flipCard = (index: number) => {
    const card = cards[index];
    if (card.flipped || card.matched || flippedCards.length === 2) {
      return;
    }
  }

 /*  const resetGame = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
  };   */

  

  return (
    <>
      <h1>Memory Game</h1>
      <div className="memory-game">
        {cards.map((card, i) => {
          return <div 
            key={i} 
            className={`memory-card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={() => flipCard(i)}>{!card.flipped && card.front}{card.flipped && card.symbol}
          </div>;
        })}

      <button onClick={resetGame}>Reset Game</button>
      <p>Matches: {matches}</p>
      </div>
    </>
  );
}

