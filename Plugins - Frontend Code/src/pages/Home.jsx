import React from 'react'
import Footer from "../components/Footer";
import Greet from '../components/Greet';
import Chatbot from '../components/Chatbot';
import BottomBar from '../components/BottomBar'
import HomeNavbar from '../components/HomeNavbar'
import '../index.css'
//navbar headers
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
//sidebar headers
import { FaVideo, FaMicrophone, FaHome, FaMusic,FaGamepad , FaPlus, FaUser, FaRobot, FaArrowLeft, FaFileContract, FaEnvelope, FaUsers, FaBook, FaEdit } from 'react-icons/fa';
import CardContainer from '../components/CardContainer';
import WeatherApp from '../components/WeatherApp';
import { useState, useEffect } from 'react';
import "../components/Player.css";


const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/searchpage'); // Replace '/search' with the path to the page you want to navigate to
  };

  //for sidebar

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAutoCollapsed, setIsAutoCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
        setIsAutoCollapsed(true);
      } else {
        setIsCollapsed(false);
        setIsAutoCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set initial state based on current window size
    handleResize();

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For alert button in sidebar
  const handleAlertClick = () => {
    alert('YOU HAVE TO SIGN UP FOR USE THIS FEATURE');
  };
  const commingSoonAlert = () => {
    alert('COMMING SOON');
  };

  //css

  return (
    <>
    <div className="main-css">
      {/* navbar start */}
      <HomeNavbar/>
      {/* navbar end */}
      {/* poster start */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/concert.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 lg:px-12">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-yellow-400 mb-4 ">Catch Your Favourite Artist's Show</h1>
            <p className="text-lg lg:text-2xl mb-6">Stream your favorite songs, albums, and playlists anytime, anywhere.</p>
            <div className="flex gap-4" onClick={commingSoonAlert}>
              <Link className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Book A Seat Now
              </Link>
              <Link to="/signup" className="bg-transparent border border-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      {/* poster end */}
      {/* greet start */}
      <Greet />
      {/* greet end */}
      {/* sidebar start */}
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white ${isCollapsed ? 'w-20' : 'w-64'} h-full p-5 flex-shrink-0 border-r border-yellow-900 transition-all duration-300 overflow-y-auto scrollbar-hide`}>
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && <span className="text-lg font-bold">Menu</span>}
        {!isAutoCollapsed && (
          <button onClick={handleToggle} className="text-yellow-500 focus:outline-none">
            <FaArrowLeft className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`} />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-500 text-gray-900 p-2 rounded transition duration-300">
          <FaHome />
          {!isCollapsed && <span>Home</span>}
        </div>
        {/* <Link>
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300" onClick={handleAlertClick}>
            <FaBook />
            {!isCollapsed && <span>Your Library</span>}
          </div>
        </Link> */}
        <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300" onClick={handleAlertClick}>
          <FaPlus />
          {!isCollapsed && <span>Your Playlist</span>}
        </div>
        <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300" onClick={handleAlertClick}>
          <FaMusic />
          {!isCollapsed && <span>Request A Song</span>}
        </div>
        <Link to="/games">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaGamepad />
            {!isCollapsed && <span>Games</span>}
          </div>
        </Link>
        <Link to="/homepage">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaVideo />
            {!isCollapsed && <span>Video Chat</span>}
          </div>
        </Link>
        <a href="https://sahin-nayak.github.io/Sound-Recorder/">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaMicrophone />
            {!isCollapsed && <span>Sound Recorder</span>}
          </div>
        </a>
        <a href="https://sahin-nayak.github.io/Audio_Editor/">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaEdit />
            {!isCollapsed && <span>Sound Editor</span>}
          </div>
        </a>
        <Link to="/team">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaUsers />
            {!isCollapsed && <span>Our Team</span>}
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaEnvelope />
            {!isCollapsed && <span>Contact Us</span>}
          </div>
        </Link>
        <Link to="/TermsAndConditions">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaFileContract />
            {!isCollapsed && <span>Terms & Policy</span>}
          </div>
        </Link>
        <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
          {!isCollapsed && <span><WeatherApp /></span>}
        </div>
      </div>
    </div>

      {/* Scrollable Card Container */}
      <div className="flex-1 overflow-auto p-4 scrollbar-hidden">
        <CardContainer />
      </div>
    </div>
      {/* sidebar end */}
      <Footer /><br /><br /><br />
      <Chatbot />
      <BottomBar />
    </div>
    </>
  )
}

export default Home
