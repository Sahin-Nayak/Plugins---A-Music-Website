import React from 'react';
import { Link } from 'react-router-dom';
// import './Player.css';

const Poster = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/concert.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 lg:px-12">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-yellow-400 mb-4 ">Catch Your Favourite Artist's Show</h1>
        <p className="text-lg lg:text-2xl mb-6">Stream your favorite songs, albums, and playlists anytime, anywhere.</p>
        <div className="flex gap-4">
          <Link to="/seatBook" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Book A Seat Now
          </Link>
          <Link className="bg-transparent border border-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Poster;
