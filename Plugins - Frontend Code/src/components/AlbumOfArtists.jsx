import React, { useState, useRef, useEffect } from 'react';

// Sample card data
const cardData = [
  {
    title: "Arijit Singh",
    imageUrl: "https://res.cloudinary.com/dxauyt0as/image/upload/v1732365028/MV5BMTNmMTQ2YzMtYzU0MS00NTI2LTk3MTgtOTI5MDgyNDc3ZDFkXkEyXkFqcGdeQXVyNDUzOTQ5MjY_._V1__jo8zxr.jpg",
    song: "https://res.cloudinary.com/dxauyt0as/video/upload/v1732366213/Best_Of_Arijit_Singh_2024_Arijit_Singh_Hits_Songs_Arijit_Singh_Jukebox_Songs_Indian_Songs_ph0zu4.mp3"
  },
  {
    title: "Kumar Sanu",
    imageUrl: "https://res.cloudinary.com/dxauyt0as/image/upload/v1732365397/th_2_zknbs2.jpg",
    song: "https://res.cloudinary.com/dxauyt0as/video/upload/v1732367095/Kumar_Sanu_top_10_song_Evergreen_song_90s_Song_hindi_old_song_Romantic_song_jan4xq.mp3"
  },
  {
    title: "Lata Mangeshkar",
    imageUrl: "https://res.cloudinary.com/dxauyt0as/image/upload/v1732367164/download_1_duntek.jpg",
    song: "https://res.cloudinary.com/dxauyt0as/video/upload/v1732367076/Lata_Mangeshkar_90_%E0%A4%B9%E0%A4%9F_%E0%A4%B8%E0%A4%A8%E0%A4%97_Songs_Old_Songs_Hindi_Purane_superhit_Gane_Old_Is_Gold_%E0%A4%B8%E0%A4%AA%E0%A4%B0%E0%A4%B9%E0%A4%9F_%E0%A4%B8%E0%A4%A8%E0%A4%97_wx7iuq.mp3"
  },
  {
    title: "Shreya Ghosal",
    imageUrl: "https://res.cloudinary.com/dxauyt0as/image/upload/v1732367164/download_2_einl9s.jpg",
    song: "https://res.cloudinary.com/dxauyt0as/video/upload/v1732367136/Shreya_Ghoshal_Hit_Songs_Jukebox_AVS_ww6vzi.mp3"
  },
  {
    title: "Abhijit",
    imageUrl: "https://res.cloudinary.com/dxauyt0as/image/upload/v1732367165/th_3_m7pn0d.jpg",
    song: "https://res.cloudinary.com/dxauyt0as/video/upload/v1732367128/Best_Romantic_Hindi_Songs_of_Abhijeet_Bhattacharya_Rare_Hit_Hindi_Songs_of_Abhijeet_Bhattacharya_kvpmxw.mp3"
  },
  // Add more card objects as needed
];

const AlbumOfArtists = () => {
  const [currentSong, setCurrentSong] = useState(null); // Track current playing song
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const [progress, setProgress] = useState(0); // Progress bar state
  const audioRef = useRef(null); // Reference to the audio element

  // Function to handle playing/pausing a song
  const handlePlayPause = (song) => {
    if (currentSong !== song) {
      setCurrentSong(song);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  // Update the progress bar as the song plays
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      const updateProgress = () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        setProgress(progress);
      };

      audio.addEventListener('timeupdate', updateProgress);
      return () => {
        audio.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [isPlaying, currentSong]);

  // Handle manual progress bar changes
  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const newProgress = event.target.value;
    audio.currentTime = (newProgress / 100) * audio.duration;
    setProgress(newProgress);
  };

  return (
    <><br />
    <h1 className="uppercase text-white text-4xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Suggestion To You</h1><br /><br />
    <div className="flex flex-wrap gap-6 justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative bg-cover bg-center rounded-lg shadow-lg w-64 h-80 overflow-hidden flex flex-col justify-between"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex flex-col justify-between">
            <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            
            {/* Play/Pause Button and Progress Bar */}
            <div className="flex items-center">
              <button
                onClick={() => handlePlayPause(card.song)}
                className="bg-green-500 text-white px-3 py-1 rounded-full mr-4"
              >
                {currentSong === card.song && isPlaying ? 'Pause' : 'Play'}
              </button>
              <input
                type="range"
                className="flex-grow"
                value={currentSong === card.song ? progress : 0}
                onChange={handleProgressChange}
              />
            </div>
          </div>

          {/* Hidden audio element for playing the song */}
          {currentSong === card.song && (
            <audio
              ref={audioRef}
              src={card.song}
              onEnded={() => setIsPlaying(false)}
            />
          )}
        </div>
      ))}
    </div></>
  );
};

export default AlbumOfArtists;
