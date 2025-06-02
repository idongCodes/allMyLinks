import React from 'react';
import TopBar from './components/TopBar/TopBar.js';
import ProfileCard from './components/ProfileCard/ProfileCard.js';
import Footer from './components/Footer/Footer.js';
import Links from './components/AllLinks/Links.js';
import './App.css';


function App() {
 return (
    <div className="App">
      <div className="main-content">
        <TopBar />
        <ProfileCard />
        <Links />
      </div>
      <Footer />
    </div>
  );
}

export default App;
