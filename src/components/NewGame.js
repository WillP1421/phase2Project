
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const GameForm = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    developer: '',
    release_date: '',
    thumbnail: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
      await axios.post('http://localhost:3001/games', formData);
   
      setFormData({
        title: '',
        genre: '',
        developer:'',
        release_date: '',
        thumbnail: '',
      });

      console.log('Game added successfully!');
    } catch (error) {
      console.error('Error adding game:', error);
    }
  };

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div><h1 id="AddGame">Add a Game</h1></div>
      

      <form onSubmit={handleSubmit}>
   
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label>

    
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            required
          />
        </label>


        <label>
          Release Date:
          <input
            type="date"
            name="releaseDate"
            value={formData.release_date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
            Developer:
        <input 
        type="text"
        name="developer"
        value={formData.developer}
        onChange={handleInputChange}
        required
        />
        </label>
    
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.thumbnail}
            onChange={handleInputChange}
            required
          />
        </label>

      
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default GameForm;


