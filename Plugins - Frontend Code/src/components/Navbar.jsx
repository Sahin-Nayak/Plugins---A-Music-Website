// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdKeyboardArrowDown } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import UserSidebar from './UserSidebar'; // Updated import statement
// import axios from  'axios';
// import { useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // const fetchUserDetails = async () => {
// //   try {
// //       const response = await axios.get('http://localhost:8080/user/current-user', {
// //           withCredentials: true // Include cookies if you're using HTTP-only cookies for auth
// //       });
// //       console.log("User data:", response.data.data);
// //       return response.data.data; // Access user data directly
// //   } catch (error) {
// //       console.error("Error fetching user data:", error.response?.data?.message || error.message);
// //   }
// // };


// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
//   const navigate = useNavigate();

//   const handleSearchClick = () => {
//     navigate('/searchpage'); // Replace '/search' with the path to the page you want to navigate to
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false); // Close the sidebar
//   };

//   //14.11.24 --> due to user name print
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//       const getUser = async () => {
//           const userData = await fetchUserDetails();
//           setUser(userData);
//       };
//       getUser();
//   }, []);

//   //all user get
//   const [users, setUsers] = useState ([])
//   useEffect(()=>{
//     axios.get('http://localhost:8080/getUsers')
//      .then(users => setUsers (users.data))
//      .catch(err => console.log(err))
//    }, [])

//    const [username, setUsername] = useState('');

//    // Fetch the username from localStorage on component mount
//    useEffect(() => {
//      const storedUsername = localStorage.getItem('username');
//      if (storedUsername) {
//        setUsername(storedUsername);
//      }
//    }, []);

//   return (
//     <>
//       <nav className="flex justify-between items-center py-3 border-none lg:border px-4 fixed top-0 left-0 right-0 bg-gray-900 text-white z-20">
//         {/* div 1 */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
//           <div className="flex justify-between items-center gap-2 mr-4">
//             <Link to="/" className=" font-extrabold text-lg text-yellow-500">
//               <img src="/vite1.png" className="logo_vite" alt="" width={37} />
//             </Link>
//           </div>
//           <div className="flex text-[24px] lg:text-[15px] gap-5 text-yellow-400 font-semibold h-full">
//             <Link to="/">
//               <li className="list-none hover:text-yellow-300 transition duration-300">Songs</li>
//             </Link>
//             <li className="list-none hover:text-yellow-300 transition duration-300">Go Pro</li>
//             <li className="list-none hover:text-yellow-300 transition duration-300">Logout</li>
//           </div>
//         </div>

//         {/* div 2 */}
//         {/* <div className="hidden lg:block">
//           <input
//             type="text"
//             name="search"
//             id="search"
//             className="py-2 rounded-full w-[40vw] outline-none text-center border border-gray-700 bg-gray-800 text-white placeholder-gray-500"
//             onClick={handleSearchClick}
//             placeholder="Search For Songs"
//           />
//         </div> */}

//         {/* div 3 */}
//         <div className="hidden lg:flex justify-between items-center gap-4">
//           <div className="flex text-[15px] gap-5 text-yellow-400 font-semibold">
//             <li className="list-none bg-yellow-900 hover: text-white font-bold py-2 px-4 rounded-full transition duration-300 cursor-pointer"> 
//               {username ? username : 'Hacker Hai Bhai'}
//             </li>
//             <li
//               className="list-none bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 cursor-pointer"
//               onClick={toggleSidebar} // Toggle the sidebar when the user icon is clicked
//             >
//               <FaUser />
//             </li>
//           </div>
//         </div>
//       </nav>

//       {/* UserSidebar */}
//       <UserSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import UserSidebar from './UserSidebar'; // Updated import statement
import axios from 'axios';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/searchpage'); // Replace '/search' with the path to the page you want to navigate to
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close the sidebar
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      // Uncomment this when you want to use fetchUserDetails
      const userData = await fetchUserDetails();
      setUser(userData);
    };
    getUser();
  }, []);

  // All users fetch
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/getUsers')
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const [username, setUsername] = useState('');

  // Fetch the username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Logout functionality
 
  const handleLogout = () => {
    try {
      // Clear local storage and navigate to home page after logout
      localStorage.removeItem('username');
      setUsername('');

      Cookies.remove('accessToken', options);
      Cookies.remove('refreshToken', options);

      // Navigate to home page
      navigate('/');

    } catch (error) {
      console.error('Logout error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center py-3 border-none lg:border px-4 fixed top-0 left-0 right-0 bg-gray-900 text-white z-20">
        {/* div 1 */}
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
          <div className="flex justify-between items-center gap-2 mr-4">
            <Link to="/" className=" font-extrabold text-lg text-yellow-500">
              <img src="/vite1.png" className="logo_vite" alt="" width={37} />
            </Link>
          </div>
          <div className="flex text-[24px] lg:text-[15px] gap-5 text-yellow-400 font-semibold h-full">
            <Link to="/">
              <li className="list-none hover:text-yellow-300 transition duration-300">Notes</li>
            </Link>
            <li className="list-none hover:text-yellow-300 transition duration-300">Go Pro</li>
            <li
              className="list-none hover:text-yellow-300 transition duration-300 cursor-pointer"
              onClick={handleLogout} // Handle logout on click
            >
              Logout
            </li>
          </div>
        </div>

        {/* div 3 */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          <div className="flex text-[15px] gap-5 text-yellow-400 font-semibold">
            <li className="list-none bg-yellow-900 hover: text-white font-bold py-2 px-4 rounded-full transition duration-300 cursor-pointer"> 
              {username ? username : 'guest user'}
            </li>
            <li
              className="list-none bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 cursor-pointer"
              onClick={toggleSidebar} // Toggle the sidebar when the user icon is clicked
            >
              <FaUser />
            </li>
          </div>
        </div>
      </nav>

      {/* UserSidebar */}
      <UserSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;
