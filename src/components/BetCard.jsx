import React, { useState } from 'react';
import './BetCard.css';

function BetCard({ time, teams, odds, imageUrl }) {
  const [selecionarodd, oddselecionada] = useState(null);

  const handleOddClick = (index) => {
    oddselecionada(index);
  };

  return (
    <div className="bet-card">
      <div className="bet-card-text">
        <p>{time}</p>
        <h3>{teams}</h3>
        <div className="odds">
          {odds.map((odd, index) => (
            <div
              key={index}
              className={`odd ${selecionarodd === index ? 'selected' : ''}`}
              onClick={() => handleOddClick(index)}
            >
              {odd}
            </div>
          ))}
        </div>
      </div>
      <div className="bet-card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    </div>
  );
}

export default BetCard;