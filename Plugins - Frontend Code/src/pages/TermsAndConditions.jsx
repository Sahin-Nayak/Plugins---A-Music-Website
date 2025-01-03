import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import TermsConditions from '../components/TermsConditions';
import HomeNavbar from '../components/HomeNavbar';
import { useState, useEffect } from "react";

const TermsAndConditions = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for the username when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      console.log("Username from localStorage:", storedUsername);
      setIsLoggedIn(true); // Set logged-in state to true if username exists
    } else {
      console.log("No username found in localStorage.");
      setIsLoggedIn(false); // Set logged-in state to false if no username
    }
  }, []);
  return (
    <div className='bg-gray-900'>
             {isLoggedIn ? (
          <Navbar />
        ) : (
          <HomeNavbar />
        )}
        <br /><br /><br /><br />
       <TermsConditions />
       <Footer />
    </div>
  )
}

export default TermsAndConditions
