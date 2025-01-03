import React from 'react'
import Navbar from '../components/Navbar';
// import Player from '../components/Player';
import Footer from "../components/Footer";
import Poster from "../components/Poster";
import Greet from '../components/Greet';
import Sidebar from '../components/Sidebar';
import Chatbot from '../components/Chatbot';
import '../index.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AfterLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Push current page to history stack to prevent going back
    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      // Push again to history to lock the user on the page
      window.history.pushState(null, null, window.location.href);
      // alert("Back navigation is disabled on this page.");
    };

    // Listen for popstate events
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);
  return (
    <div className="main-css">
      <Navbar />
      <Poster />
      <Greet />
      <Sidebar />
      <Footer />
      {/* <Player /> */}
      <Chatbot />
    </div>
  )
}

export default AfterLogin

