import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import RequestSong from "../components/RequestSong";
const RequestSongs = () => {
  return (
    <>
      <div className="main-css">
      <Navbar />
      <RequestSong />
      <Footer />
    </div>
    </>
  )
}

export default RequestSongs
