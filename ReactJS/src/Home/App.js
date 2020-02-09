import React from 'react';
import './App.css';
import headerPhoto from '../firstPageImg.jpg';

function App() {
  return (
    <div className="App">
      <img src={headerPhoto} className="header-image" alt="studying people in it" />
      <div className="AppContent">
        <h1>Welcome to Epic Seat Generator</h1>
        <p>
          Here is your opportunity to make your life much easier!
        </p>
        <p>
          This is Epic seat generator for your partyes where you want people sit
          "girl between boys". 
        </p>
        
      </div>
    </div>
  );
}

export default App;
