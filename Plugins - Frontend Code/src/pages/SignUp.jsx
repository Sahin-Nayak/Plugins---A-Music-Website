// import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer';
import React from 'react'
import '../index.css'

// navbar header
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // const handleSearchClick = () => {
  //   navigate('/searchpage'); // Replace '/search' with the path to the page you want to navigate to
  // };
  return (
    <>
      <div className="main-css SignUp">
              {/* navbar start */}
          <nav className="flex justify-between items-center py-3 border-none lg:border px-4 fixed top-0 left-0 right-0 bg-gray-900 text-white z-20">
              {/* div 1 */}
              <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0'>
                  <div className="flex justify-between items-center gap-2 mr-4">
                      
                      <Link to="/" className=" font-extrabold text-lg text-yellow-500"><img src="/vite1.png" className="logo_vite" alt="" width={37} /></Link>
                  </div>
                  <div className="flex text-[24px] lg:text-[15px] gap-5 text-yellow-400 font-semibold h-full">
                  <Link to="/signup"><li className="list-none hover:text-yellow-300 transition duration-300">Login</li></Link>
                  <Link to="/signup"><li className="list-none hover:text-yellow-300 transition duration-300">Sign Up</li></Link>
                      <li className="list-none hover:text-yellow-300 transition duration-300">Go Pro</li>
                  </div>
              </div>
              {/* div 2 */}
              {/* <div className="hidden lg:block">
                  <input type="text" name="search" id="search" className="py-2 rounded-full w-[40vw] outline-none text-center border border-gray-700 bg-gray-800 text-white placeholder-gray-500" onClick={handleSearchClick} placeholder="Search For Songs" />
              </div> */}
              {/* div 3 */}
              <div className="hidden lg:flex justify-between items-center gap-4">
                  <div className="flex text-[15px] gap-5 text-yellow-400 font-semibold">
                      <Link to="/signup"><li className="list-none bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Log In</li></Link>
                      <Link to="/signup"><li className="list-none bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Sign Up</li></Link>
                  </div>
              </div>
          </nav>
          {/* navbar end */}
            <Login />
            <Footer />
      </div>
    </>
  )
}

export default SignUp
