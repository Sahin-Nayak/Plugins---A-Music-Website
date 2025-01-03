import React, { useState, useEffect } from "react";
import axios from "axios";

const PlaylistManager = ({ userId }) => {
  const [playlists, setPlaylists] = useState([]); // To store all playlists
  const [name, setName] = useState(""); // For creating/updating playlist name
  const [description, setDescription] = useState(""); // For creating/updating playlist description
  const [owner, setOwner] = useState(""); // For storing the owner username
  const [editingPlaylist, setEditingPlaylist] = useState(null); // To check if in edit mode
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [searchQuery, setSearchQuery] = useState(""); // For filtering playlists
  const [selectedPlaylist, setSelectedPlaylist] = useState(null); // To store the selected playlist
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To control sidebar visibility

  // Fetch user's playlists from backend
  useEffect(() => {
    if (userId) {
      fetchPlaylists();
    }

    // Fetch username from localhost and set it to owner
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setOwner(storedUsername);
      console.log("Fetched username from localhost:", storedUsername); // Print fetched username
    }
  }, [userId, owner]); // Add `owner` to the dependency array

  const fetchPlaylists = async () => {
    try {
      setLoading(true);
      if (owner) {
        const response = await axios.get(`http://localhost:8080/${owner}`);
        setPlaylists(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching playlists", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle create/update playlist
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Name and description are required!");
      return;
    }

    try {
      const payload = { name, description, owner };

      if (editingPlaylist) {
        // Update playlist if editing
        const response = await axios.patch(
          `http://localhost:8080/playlist/${editingPlaylist._id}`,
          payload
        );
        // Update playlists state with the updated playlist
        setPlaylists((prev) =>
          prev.map((playlist) =>
            playlist._id === response.data.data._id ? response.data.data : playlist
          )
        );
      } else {
        // Create new playlist if not editing
        const response = await axios.post("http://localhost:8080/playlist", payload);
        // Add new playlist to the state
        setPlaylists((prev) => [...prev, response.data.data]);
      }
      // Clear form fields and reset editing state
      setName("");
      setDescription("");
      setEditingPlaylist(null);
    } catch (error) {
      console.error("Error saving playlist", error);
    }
  };

  // Handle edit button click
  const handleEdit = (playlist) => {
    setEditingPlaylist(playlist);
    setName(playlist.name);
    setDescription(playlist.description);
  };

  // Handle delete playlist
  const handleDelete = async (playlistId) => {
    try {
      await axios.delete(`http://localhost:8080/playlist/${playlistId}`);
      setPlaylists((prev) => prev.filter((playlist) => playlist._id !== playlistId));
    } catch (error) {
      console.error("Error deleting playlist", error);
    }
  };

  // Open the sidebar when a playlist is clicked and store playlist ID in localStorage
  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    setIsSidebarOpen(true);

    // Print playlist ID to the console
    console.log("Selected Playlist ID:", playlist._id);

    // Store the playlist ID in localStorage
    localStorage.setItem("selectedPlaylistId", playlist._id);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedPlaylist(null);
  };

  // Filter playlists based on search query
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-400">
          {editingPlaylist ? "Edit Playlist" : "Create Playlist"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 p-4 rounded-lg mb-6 space-y-4"
        >
          {/* Hidden input for Owner */}
          <input
            type="hidden"
            name="owner"
            value={owner}
          />

          <input
            type="text"
            placeholder="Playlist Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 rounded-md transition duration-200 ease-in-out"
            >
              {editingPlaylist ? "Update Playlist" : "Create Playlist"}
            </button>
            {editingPlaylist && (
              <button
                type="button"
                onClick={() => {
                  setEditingPlaylist(null);
                  setName("");
                  setDescription("");
                }}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-md transition duration-200 ease-in-out"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Display Playlists */}
        <div className="bg-gray-700 p-4 rounded-lg space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Your Playlists</h3>
          <input
            type="text"
            placeholder="Search Playlists"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <ul className="space-y-2">
            {filteredPlaylists.map((playlist) => (
              <li
                key={playlist._id}
                onClick={() => handlePlaylistClick(playlist)}
                className="cursor-pointer px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-200"
              >
                {playlist.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Playlist Details */}
        {selectedPlaylist && (
          <div className="bg-gray-700 p-4 rounded-lg mt-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Playlist Details</h3>
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-300">Name: {selectedPlaylist.name}</p>
              <p className="text-lg font-semibold text-gray-300">Description: {selectedPlaylist.description}</p>
              <p className="text-lg font-semibold text-gray-300">Owner: {selectedPlaylist.owner}</p>
              {/* You can add more details like the creation date, tracks, etc. */}
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleEdit(selectedPlaylist)}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 rounded-md transition duration-200 ease-in-out"
              >
                Edit Playlist
              </button>
              <button
                onClick={() => handleDelete(selectedPlaylist._id)}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-md transition duration-200 ease-in-out"
              >
                Delete Playlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistManager;
