import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LyricsSearch from '../components/LyricsSearch';

const LyricsSearches = () => {
  const backgroundStyle = {
    backgroundImage: "url('/bg_search.jpg')", // Replace with the actual path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensures the background covers the full height
    color: 'white', // Adjust text color if needed
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <LyricsSearch />
      <Footer />
    </div>
  );
};

export default LyricsSearches;
