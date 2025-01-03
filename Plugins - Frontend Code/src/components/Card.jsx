// import React, { useState, useRef } from 'react';
// import { FaPlay, FaPause, FaPlus } from 'react-icons/fa';

// const Card = ({ title, description, imageUrl, song }) => {
//   const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
//   const audioRef = useRef(new Audio(song)); // Reference to the audio element

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause(); // Pause the song if it's currently playing
//     } else {
//       audioRef.current.play(); // Play the song if it's currently paused
//     }
//     setIsPlaying(!isPlaying); // Toggle the play/pause state
//   };

//   return (
//     <div className="w-64 h-60 relative overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-600">
//       <img
//         src={imageUrl}
//         alt="Card Image"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
//       <div className="absolute bottom-0 left-0 w-full p-4 text-white">
//         <h2 className="text-lg font-bold">{title}</h2>
//         <p className="text-sm">{description}</p>
//       </div>
//       <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition">
//         <div className="flex gap-4">
//           <button
//             onClick={togglePlayPause} // Toggle play/pause when button is clicked
//             className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition shadow-lg hover:shadow-xl"
//           >
//             {isPlaying ? (
//               <FaPause className="text-white" /> // Show pause icon if playing
//             ) : (
//               <FaPlay className="text-white" /> // Show play icon if not playing
//             )}
//           </button>
//           <button className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition shadow-lg hover:shadow-xl">
//             <FaPlus className="text-white" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaPlus, FaInfoCircle } from 'react-icons/fa';

const Card = ({ title, description, imageUrl, song, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const [progress, setProgress] = useState(0); // State to track progress of the song
  const [duration, setDuration] = useState(0); // State to track the total duration of the song
  const [showPlayer, setShowPlayer] = useState(false); // State to toggle detailed player visibility
  const [showDetails, setShowDetails] = useState(false); // State to toggle pop-up visibility for details
  const audioRef = useRef(new Audio(song)); // Reference to the audio element
  const progressBarRef = useRef(null); // Reference to the progress bar

  useEffect(() => {
    const audio = audioRef.current;

    // Update progress every second
    const updateProgress = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the song if it's currently playing
    } else {
      audioRef.current.play(); // Play the song if it's currently paused
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
  };

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const clickPosition = e.nativeEvent.offsetX;
    const newProgress = (clickPosition / progressBar.offsetWidth) * 100;
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * duration; // Set the song to the new time
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails); // Toggle the pop-up visibility
  };

  return (
    <div className="w-64 h-60 relative overflow-hidden rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-600">
      <img
        src={imageUrl}
        alt="Card Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{artist}</p>
      </div>
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition">
        <div className="flex gap-4">
          <button
            onClick={() => {
              togglePlayPause();
              setShowPlayer(true); // Show the detailed player when clicked
            }}
            className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition shadow-lg hover:shadow-xl"
          >
            {isPlaying ? (
              <FaPause className="text-white" /> // Show pause icon if playing
            ) : (
              <FaPlay className="text-white" /> // Show play icon if not playing
            )}
          </button>
          <button className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition shadow-lg hover:shadow-xl">
            <FaPlus className="text-white" />
          </button>
          <button
            onClick={toggleDetails} // Show pop-up when clicked
            className="p-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition shadow-lg hover:shadow-xl"
          >
            <FaInfoCircle className="text-white" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {isPlaying && (
        <div
          ref={progressBarRef}
          className="absolute bottom-0 left-0 w-full h-2 bg-gray-500 cursor-pointer"
          onClick={handleProgressBarClick}
        >
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-yellow-600 transition-width duration-200"
          ></div>
        </div>
      )}

      {/* Detailed Player */}
      {showPlayer && (
        <div className="absolute top-64 w-full bg-gray-900 text-white rounded-lg p-4 shadow-lg transition transform hover:scale-105">
          <div className="flex items-center gap-4">
            <img
              src={imageUrl}
              alt="Song Image"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm text-gray-400">{artist}</p>
            </div>
          </div>
          {/* Progress bar */}
          <div
            ref={progressBarRef}
            className="mt-4 w-full h-2 bg-gray-500 cursor-pointer"
            onClick={handleProgressBarClick}
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-yellow-600 transition-width duration-200"
            ></div>
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span>{Math.floor((audioRef.current?.currentTime || 0) / 60)}:{Math.floor(audioRef.current?.currentTime % 60)}</span>
            <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>
          </div>
        </div>
      )}

      {/* Pop-up Window (Large and Outside of Card) */}
      {showDetails && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full lg:w-full xl:w-full p-8 rounded-lg shadow-2xl max-h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">About</h3>
              <button
                onClick={toggleDetails} // Close the pop-up when clicked
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                X
              </button>
            </div>
            <div className="max-h-80">
              <p className="mb-6 text-lg">{description}</p>
              {/* <p className="mb-6 text-sm text-gray-700">Artist: {artist}</p> */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={toggleDetails} // Close the pop-up when clicked
                  className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;




