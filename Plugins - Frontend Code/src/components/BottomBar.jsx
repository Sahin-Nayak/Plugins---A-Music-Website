import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BottomBar() {
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-600 to-blue-500 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-center sm:text-left mb-4 sm:mb-0">
          <p className="font-bold text-lg sm:text-base">Preview of Plugins</p>
          <p className="text-sm sm:text-xs">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full text-sm sm:text-base">
          Sign up free
        </button>
      </div>
    </div>
  );
}

export default BottomBar;
