import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.originals} 
        isLargeRow />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.trending} />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.topRated} />
      <Row 
        title="Action Movies" 
        fetchUrl={requests.action} />
      <Row 
        title="Comedy Movies" 
        fetchUrl={requests.comedy} />
      <Row 
        title="Drama Movies" 
        fetchUrl={requests.drama} />
      <Row 
        title="Fantasy Movies" 
        fetchUrl={requests.fantasy} />
      <Row 
        title="Documentaries Movies" 
        fetchUrl={requests.documentaries} />
      <Row 
        title="Romantic Movies" 
        fetchUrl={requests.romantic} />
    </div>
  );
}

export default App;

