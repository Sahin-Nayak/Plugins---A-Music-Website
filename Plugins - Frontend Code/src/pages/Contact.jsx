import Navbar from '../components/Navbar';
import HomeNavbar from '../components/HomeNavbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import React from 'react'
import { useState, useEffect } from "react";

const Contact = () => {
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
    <>
      <div className="main-css SignUp">
      {isLoggedIn ? (
          <Navbar />
        ) : (
          <HomeNavbar />
        )}
        <br /><br /><br /><br />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default Contact
