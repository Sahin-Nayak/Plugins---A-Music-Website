import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaTimes, FaSearch } from 'react-icons/fa';

const UserSidebar = ({ isOpen, closeSidebar }) => {
  // State to store the user list and search query
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered users

  // Fetch users from API
  useEffect(() => {
    axios
      .get('http://localhost:8080/getUsers')
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filtered users with all users
      })
      .catch((err) => console.log(err));
  }, []);

  // Update filtered users based on search query
  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[275px] bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md text-white transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50 shadow-2xl border-l-4 border-gradient-to-b rounded-l-lg`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Close Button */}
        <button
          className="text-white font-semibold text-xl mb-4 self-end hover:text-yellow-300 transition duration-300"
          onClick={closeSidebar}
        >
          <FaTimes size={22} />
        </button>

        {/* Search Box */}
        <div className="relative mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-gray-700/30 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-700/50 transition duration-300"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <ul className="space-y-4">
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-lg bg-gray-700/30 hover:bg-gray-700/50 rounded-lg py-2 px-3 transition duration-300 hover:text-yellow-300 hover:scale-105 transform cursor-pointer shadow-md"
              >
                <FaUser className="text-yellow-400" />
                <span>{user.username}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
