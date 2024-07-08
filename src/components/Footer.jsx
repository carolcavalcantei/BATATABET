import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className="logo">
        <img src="src/assets/batatabetlogo.png" alt="Batata Bet" />
      </div>        
      <div className="patrocinadores">
      <img src="src/assets/patrocinador.png" alt="Patrocinador" />
      </div>
      <p>
      Este site é operado pela Kaizen Gaming International Ltd, uma empresa estabelecida em Malta com o número de registro C43209, com seu endereço registrado no Flat B8, The Atrium, West Street, Msida MSD 1731, Malta. Kaizen Gaming International Ltd. é licenciado e regulamentado pela Malta Gaming Authority sob licença MGA / CRP / 152/2007, emitida em 12 de junho de 2019.
      </p>
    </footer>
  );
}

export default Footer;