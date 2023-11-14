import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Games from './Games';
import NewGame from './NewGame';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <Games />
       <NewGame />
    </div>
  );
}

export default App;
