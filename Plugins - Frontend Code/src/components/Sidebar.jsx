import React from 'react';
import { FaVideo, FaMicrophone, FaHome, FaMusic,FaGamepad , FaPlus, FaUser, FaRobot, FaArrowLeft, FaFileContract, FaEnvelope, FaUsers, FaBook, FaEdit } from 'react-icons/fa';
import CardContainer from '../components/CardContainer';
import WeatherApp from '../components/WeatherApp';
import PopularArtist from '../components/PopularArtist';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Player.css';

const Sidebar = () => {
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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white ${isCollapsed ? 'w-20' : 'w-64'} h-full p-5 flex-shrink-0 border-r border-yellow-900 transition-all duration-300`}>
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
          <Link to="/AlbumDetails"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaPlus />
            {!isCollapsed && <span>Your Playlist</span>}
          </div></Link>
          <Link to="/RequestSongs"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaMusic />
            {!isCollapsed && <span>Request A Song</span>}
          </div></Link>
          <Link to="/games"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaGamepad />
            {!isCollapsed && <span>Games</span>}
          </div></Link>
          <Link to="/homepage"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaVideo />
            {!isCollapsed && <span>Video Chat</span>}
          </div></Link>
          <a href="https://sahin-nayak.github.io/Sound-Recorder/">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaMicrophone />
            {!isCollapsed && <span>Sound Recorder</span>}
          </div></a>
          <a href="https://sahin-nayak.github.io/Audio_Editor/">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaEdit />
            {!isCollapsed && <span>Sound Editor</span>}
          </div></a>
          <Link to="/team">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            < FaUsers />
            {!isCollapsed && <span>Our Team</span>}
          </div></Link>
          <Link  to="/lyrics">
          <div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaBook />
            {!isCollapsed && <span>Lyrics Search</span>}
          </div>
          </Link>
          <Link to="/contact"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaEnvelope />
            {!isCollapsed && <span>Contact Us</span>}
          </div></Link>
          <Link to="/TermsAndConditions"><div className="flex items-center gap-3 hover:bg-yellow-500 hover:text-gray-900 p-2 rounded transition duration-300">
            <FaFileContract />
            {!isCollapsed && <span>Terms & Policy</span>}
          </div></Link>
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
  );
};

export default Sidebar;
