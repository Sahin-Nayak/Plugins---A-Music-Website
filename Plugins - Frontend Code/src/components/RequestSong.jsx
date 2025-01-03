import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import './Player.css';

const RequestSong = () => {
  const [formData, setFormData] = useState({
    uname: '',
    artist: '',
    thumbnail: '',
    title: '',
    description: '',
    audioFile: null,
  });

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch the username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setFormData((prevFormData) => ({
        ...prevFormData,
        uname: storedUsername,
      }));
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Form Data:', formData);

    // Create form data object
    const formDataToSend = new FormData();
    formDataToSend.append('uname', formData.uname);
    formDataToSend.append('artist', formData.artist);
    formDataToSend.append('thumbnail', formData.thumbnail);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('audioFile', formData.audioFile);

    try {
      const response = await axios.post('http://localhost:8080/audio', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);

      // Reset form after submission
      setFormData({
        uname: username,
        artist: '',
        thumbnail: null,
        title: '',
        description: '',
        audioFile: null,
      });
    } catch (error) {
      setError('Failed to submit song request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white background-container-request">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg content-container-request">
        <h2 className="text-2xl font-bold mb-4 text-yellow-500 text-center">REQUEST A SONG</h2>
        <hr /><br />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="uname" value={formData.uname} onChange={handleChange} />
          <div>
            <label className="block text-gray-400 mb-1">Artist Name</label>
            <input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-yellow-500"
              placeholder="Enter the artist name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Thumbnail</label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              accept="image/*"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Song Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter the song title"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Upload Song (MP3 only)</label>
            <input
              type="file"
              name="audioFile"
              accept=".mp3"
              onChange={handleFileChange}
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Artist Details</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter any additional message or details"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-400 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestSong;
