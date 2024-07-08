import React from 'react';
import BetCard from './BetCard';
import './Main.css';

function Main() {
  return (
    <main>
      <section id="live-bets">
        <h2>Aposte Agora ↓</h2>
        <div className="bet-cards">
          <BetCard
            time="▶ Esta noite / 18:30h"
            teams="Palmeiras x Bahia" 
            odds={[1.57, 3.35, 4.08]}
            imageUrl="src/assets/fotos-times-04.png"
          />
          <BetCard
            time="▶ Hoje / 16:00h"
            teams="Fortaleza x Fluminense"
            odds={[1.38, 2.56, 5.95]}
            imageUrl="src/assets/fotos-times-06.png"
          />
          <BetCard
            time="⚡Ao vivo / 45:24"
            teams="Internacional x Vasco"
            odds={[1.63, 2.05, 1.94]}
            imageUrl="src/assets/fotos-times-05.png"
          />
        </div>
      </section>
      <section id="live-games">
        <h2>Esportes ↓</h2>
        <div className="sports">
          <div className="sport">⚽ Futebol</div>
          <div className="sport">🎾 Tenis</div>
          <div className="sport">⚽ Futsal</div>
          <div className="sport">🏀 Basquete</div>
          <div className="sport">⚾ Beisebol</div>
          <div className="sport">🏈 Futebol Americano</div>
        </div>
      </section>
    </main>
  );
}

export default Main;