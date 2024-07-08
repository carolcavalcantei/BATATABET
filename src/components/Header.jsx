import React from 'react';
import './Header.css';

function Header() {
  const handleClickEntrar = () => {
    alert('Voce esta conectado!');
  };
  return (
    <header>
      <div className="logo">
        <img src="src/assets/batatabetlogo.png" alt="Batata Bet" />
      </div>
      <nav>
        <ul>
          <li><a href="#live-bets">Apostas ao Vivo</a></li>
          <li><a href="#sports-bets">Apostas Esportivas</a></li>
          <li><a href="#register">Registrar</a></li>
          <li><button style={{ backgroundColor: '#4e054b', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }} onClick={handleClickEntrar}>Entrar</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;