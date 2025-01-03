import React from 'react';
import Navbar from '../components/Navbar';
import PlaylistManager from '../components/PlaylistManager';
import Footer from "../components/Footer";

const AlbumDetails = () => {
  return (
  <div className="main-css bg-gray-800 px-8">
    <Navbar /><br/><br/><br/><br/><br/>
    <PlaylistManager />
    <Footer />
  </div>
  )
}

export default AlbumDetails
