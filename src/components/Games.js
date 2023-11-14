
import React, { useState, useEffect } from 'react';
import "./Games.css"
import NavBar from './NavBar';

const Games = () => {

  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/games")
    .then((response) => response.json())
    .then((data) => setGames(data))
  }, []); 
  const filteredGames = games.filter((game) =>
  game.title.toLowerCase().includes(search.toLowerCase())
);
  
  
  return (
    <div>
    <NavBar />
      <h1 id="GameList" >Game List</h1>
      
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <ul>
        {/* Map over the games array and render each game */}
        {filteredGames.map((game) => (
          <li key={game.id}>
            {/* Display relevant information about the game */}
            <img src={game.thumbnail} alt="Game Image Here" />
            <h3>{game.title}</h3>
            <p>Genre: {game.genre}</p>
            <p>Release Date: {game.release_date}</p>
            <p>Developer: {game.developer}</p>
            {/* Add more information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
