import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;