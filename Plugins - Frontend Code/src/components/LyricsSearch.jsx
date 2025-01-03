
// import React, { useState } from 'react';
// import axios from 'axios';

// const LyricsSearch = () => {
//   const [query, setQuery] = useState({ artist: '', title: '' }); // Store artist and song title
//   const [lyricsResult, setLyricsResult] = useState(''); // Store fetched lyrics or error message
//   const [loading, setLoading] = useState(false); // Loading state for better UX

//   // Function to handle search
//   const handleSearch = async (e) => {
//     e.preventDefault(); // Prevent page reload on form submit
//     const { artist, title } = query;

//     if (!artist || !title) {
//       setLyricsResult('Please provide both artist and song title.');
//       return;
//     }

//     try {
//       setLoading(true);
//       setLyricsResult(''); // Clear previous results

//       // Fetch lyrics from Lyrics.ovh API
//       const response = await axios.get(
//         `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`
//       );

//       setLyricsResult(response.data.lyrics || 'Lyrics not found.');
//     } catch (error) {
//       setLyricsResult('Error fetching lyrics. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-semibold mb-6">Search Song Lyrics</h1>
//       <form onSubmit={handleSearch} className="w-full max-w-md">
//         <div className="relative mb-4">
//           <input
//             type="text"
//             placeholder="Enter artist name..."
//             value={query.artist}
//             onChange={(e) => setQuery({ ...query, artist: e.target.value })}
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
//           />
//           <input
//             type="text"
//             placeholder="Enter song title..."
//             value={query.title}
//             onChange={(e) => setQuery({ ...query, title: e.target.value })}
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white"
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       <div className="mt-6 w-full max-w-md text-center">
//         {lyricsResult && (
//           <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             <pre className="text-gray-200 whitespace-pre-wrap">{lyricsResult}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LyricsSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// const LyricsSearch = () => {
//   const [query, setQuery] = useState({ artist: '', title: '' });
//   const [lyricsResult, setLyricsResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const { artist, title } = query;

//     if (!artist || !title) {
//       setLyricsResult('Please provide both artist and song title.');
//       return;
//     }

//     try {
//       setLoading(true);
//       setLyricsResult('');
//       const response = await axios.get(
//         // `http://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`
//         `https://private-anon-e24cfe1cad-lyricsovh.apiary-mock.com/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`
//       );
//       setLyricsResult(response.data.lyrics || 'Lyrics not found.');
//     } catch (error) {
//       setLyricsResult('Error fetching lyrics. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen text-white flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-semibold mb-6">Search Song Lyrics</h1>
//       <form onSubmit={handleSearch} className="w-full max-w-md">
//         <div className="relative mb-4">
//           <input
//             type="text"
//             placeholder="Enter artist name..."
//             value={query.artist}
//             onChange={(e) => setQuery({ ...query, artist: e.target.value })}
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
//           />
//           <input
//             type="text"
//             placeholder="Enter song title..."
//             value={query.title}
//             onChange={(e) => setQuery({ ...query, title: e.target.value })}
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white"
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </form>

//       <div className="mt-6 w-full max-w-md text-center">
//         {lyricsResult && (
//           <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             <pre className="text-gray-200 whitespace-pre-wrap">{lyricsResult}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LyricsSearch;





import React, { useState } from 'react';

// Mock API (Replace with actual API import if needed)
const api = {
  lyricsEndpoint: {
    getLyrics: async (songName, textOnly, limit) => {
      // Mock API response
      return Promise.resolve({
        lyrics: `Mock lyrics for the song "${songName}".`,
      });
    },
  },
};

const LyricsSearch = () => {
  const [query, setQuery] = useState({ songName: '' }); // Store song name
  const [lyricsResult, setLyricsResult] = useState(''); // Store fetched lyrics or error message
  const [loading, setLoading] = useState(false); // Loading state for better UX

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    const { songName } = query;

    if (!songName) {
      setLyricsResult('Please provide a song name.');
      return;
    }

    try {
      setLoading(true);
      setLyricsResult(''); // Clear previous results

      // Fetch lyrics from the given API
      const response = await api.lyricsEndpoint.getLyrics(songName, true, 1);

      // Display lyrics or error message
      setLyricsResult(response.lyrics || 'Lyrics not found.');
    } catch (error) {
      setLyricsResult('Error fetching lyrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-6">Search Song Lyrics</h1>
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Enter song name..."
            value={query.songName}
            onChange={(e) => setQuery({ songName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="mt-6 w-full max-w-md text-center">
        {lyricsResult && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <pre className="text-gray-200 whitespace-pre-wrap">{lyricsResult}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default LyricsSearch;

