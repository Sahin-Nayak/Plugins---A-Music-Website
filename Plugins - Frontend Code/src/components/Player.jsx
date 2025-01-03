import React, { useState } from 'react';
import { BiRepeat } from 'react-icons/bi';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { PiShuffleBold } from 'react-icons/pi';
import { FaPlay, FaPause } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';
import { LuHardDriveDownload } from 'react-icons/lu';
import { MdFavorite } from 'react-icons/md';
import { AiOutlineUp, AiOutlineClose } from 'react-icons/ai';
import VolumeController from './VolumeController';
import './Player.css';

const Player = () => {
  // const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // New state for popup visibility

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 left-0 bg-gray-900 text-white flex flex-col z-20">
        <input 
          type="range" 
          name="progress" 
          id="progress" 
          min={0} 
          max={100} 
          step="0.1" 
          value={0} 
          className="progress-bar w-full h-[5px]"  // Apply the custom class
        />
        <div className="flex justify-between h-[8vh] lg:h-[7vh] items-center mb-3 px-3">
          {/* 1st div */}
          <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
            <img src="/thumb.jpg" alt="" width={55} className="rounded-lg" />
            <div className="hidden lg:block">
              <span className="text-yellow-500">Lorem, ipsus</span>
              <p className="text-xs text-gray-500">lorem ipsus dolor sit amet</p>
            </div>
          </div>
          {/* 2nd div */}
          <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
            <BiRepeat className="text-gray-400 hover:text-yellow-300 transition duration-300 cursor-pointer" />
            <IoMdSkipBackward className="text-gray-700 hover:text-yellow-300 transition duration-300 cursor-pointer" />
            <FaPlay className="text-gray-700 hover:text-yellow-300 transition duration-300 cursor-pointer" />
            <IoMdSkipForward className="text-gray-700 hover:text-yellow-300 transition duration-300 cursor-pointer" />
            <PiShuffleBold className="text-gray-400 hover:text-yellow-300 transition duration-300 cursor-pointer" />
            <MdFavorite onClick={toggleFavorite} className={`cursor-pointer transition duration-300 ${ isFavorite ? 'text-red-500' : 'text-gray-700 hover:text-yellow-300' }`} /> {/* New favorite button */}
          </div>
          {/* 3rd div */}
          <div className="flex lg:w-[30vw] justify-end items-center" onMouseEnter={() => setIsVolumeVisible(true)} onMouseLeave={() => setIsVolumeVisible(false)}>
            <LuHardDriveDownload className="text-gray-700 hover:text-yellow-300 text-2xl lg:text-3xl transition duration-300 cursor-pointer lg:mr-2" /> &nbsp;&nbsp;
            {/* <HiSpeakerWave className="text-gray-700 hover:text-yellow-300 text-2xl lg:text-3xl transition duration-300 cursor-pointer hidden lg:block" /> */}
            {/* <VolumeController isVolumeVisible={isVolumeVisible} /> */}
            <button 
              onClick={togglePopup}
              className="text-yellow-300 hover:text-yellow-500 text-2xl transition duration-300 cursor-pointer"
            >
              <AiOutlineUp />
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up Window */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-center items-center">
        <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 h-3/4 overflow-y-auto text-white scrollbar-hidden hover:border-2 hover:border-yellow-600">
          <button onClick={togglePopup} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-yellow-600 transition fixed"><AiOutlineClose /></button>
          <h2 className="text-xl font-bold mb-4">Popup Content</h2>
          <p className="mb-2">This is some example content inside the popup window. You can add anything here, including additional components, text, or other elements.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          <p className="mb-2">More content... Scroll down to see more.</p>
          {/* Add more content or components here as needed */}
        </div>
      </div>
      
      )}
    </>
  );
}

export default Player;
