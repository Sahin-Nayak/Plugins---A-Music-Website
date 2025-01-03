import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import PopularArtist from './PopularArtist';
import AlbumOfArtists from './AlbumOfArtists';

const CardContainer = () => {
  const [users, setUsers] = useState([]); // Holds the data fetched from the API
  const [filteredUsers, setFilteredUsers] = useState([]); // Stores the filtered data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Holds the search query

  // Fetch data from the backend dynamically
  useEffect(() => {
    axios
      .get('http://localhost:8080/audio')
      .then((response) => {
        setUsers(response.data.data.docs);
        setFilteredUsers(response.data.data.docs); // Initialize filtered users with all data
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        if (err.response) {
          console.error('Response Status:', err.response.status);
          console.error('Response Data:', err.response.data);
        } else {
          console.error('Error Message:', err.message);
        }
        setError('Failed to load data.');
        setLoading(false);
      });
  }, []);

  // Function to handle search input change
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter users based on search query matching title or artist
    const filtered = users.filter(
      (user) =>
        user.title.toLowerCase().includes(query) ||
        user.artist.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <PopularArtist/><br />
      <AlbumOfArtists/><br /><br />
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or artist..."
          value={searchQuery}
          onChange={handleSearch}
          className="py-2 rounded-full w-[40vw] outline-none text-center border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
        />
      </div>
    <h1 className="uppercase text-white text-4xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular Songs</h1><br />
      {/* Cards Display */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <Card
              key={index}
              title={user.title}
              description={user.description}
              imageUrl={user.thumbnail}
              song={user.audioFile}
              artist={user.artist}
            />
          ))
        ) : (
          <div>No cards available</div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
