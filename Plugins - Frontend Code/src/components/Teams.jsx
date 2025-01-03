import React from "react";
import './Player.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Teams () {
    // let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
    return (
      <div >
        <section className="section-white bg-gray-300">
          <div className="container bg-gray-300 mx-auto">
            <div className="text-center">
              <h2 className="section-title text-4xl font-bold mb-4 text-white-800">The Team Behind Plugins</h2>
              <p className="section-subtitle text-lg text-gray-600"> </p>
            </div> 
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="team-item p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                <img src="./public/Sahin-pic.jpg" className="team-img rounded-full mx-auto mb-4 w-24 h-24 object-cover" alt="Sahin Nayak" />
                <h3 className="text-center text-2xl font-semibold">Sahin Nayak</h3>
                <div className="team-info text-center text-gray-500">
                  <p>Front-end Developer</p>
                </div>
                <p className="text-center text-gray-600 mt-2">Sahin is our front end developer and has developed different websites for a variety of clients from international brands.</p>
                <ul className=" flex text-black-500 justify-center space-x-4 mt-4">
                  <li><a href="https://github.com/Sahin-Nayak" className="text-black-500 hover:text-blue-700"><FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                  <li><a href="https://www.linkedin.com/in/sahin-nayak-07a614292/" className="text-black-500 hover:text-pink-700"><FaLinkedin className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                </ul>
              </div>

              <div className="team-item p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                <img src="./public/Subhra-pic.jpg" className="team-img rounded-full mx-auto mb-4 w-24 h-24 object-cover" alt="Subhrajyoti Sarkar" />
                <h3 className="text-center text-2xl font-semibold">Subhrajyoti Sarkar</h3>
                <div className="team-info text-center text-gray-500">
                  <p>Front-end Developer</p>
                </div>
                <p className="text-center text-gray-600 mt-2">Graduating with a degree in computer application, Subhrajyoti has always loved developing websites and now he’s lucky enough to do it.</p>
                <ul className=" flex text-black-500 justify-center space-x-4 mt-4">
                  <li><a href="https://github.com/SubhrajyotiSarkar" className="text-black-500 hover:text-blue-700"><FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                  <li><a href="https://www.linkedin.com/in/subhrajyoti-sarkar-121356242/" className="text-black-500 hover:text-pink-700"><FaLinkedin className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                </ul>
              </div>

              <div className="team-item p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                <img src="./public/Vishal-pic.jpg" className="team-img rounded-full mx-auto mb-4 w-24 h-24 object-cover" alt="Vishal Parui" />
                <h3 className="text-center text-2xl font-semibold">Vishal Parui</h3>
                <div className="team-info text-center text-gray-500">
                  <p>Back-end Developer</p>
                </div>
                <p className="text-center text-gray-600 mt-2">Vishal first fell in love with backend dev at the college. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                <ul className=" flex text-black-500 justify-center space-x-4 mt-4">
                  <li><a href="https://github.com/VishalParui" className="text-black-500 hover:text-blue-700"><FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                  <li><a href="https://www.linkedin.com/in/vishal-parui-51a75321b/" className="text-black-500 hover:text-pink-700"><FaLinkedin className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                </ul>
              </div>
              <div className="team-item p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                <img src="./public/hrisha.jpg" className="team-img rounded-full mx-auto mb-4 w-24 h-24 object-cover" alt="Vishal Parui" />
                <h3 className="text-center text-2xl font-semibold">Hrisha Gossain</h3>
                <div className="team-info text-center text-gray-500">
                  <p>AI Developer</p>
                </div>
                <p className="text-center text-gray-600 mt-2">An AI developer specializes in creating intelligent systems and applications using machine learning, data analysis, and automation. They build algorithms that enable machines to learn from data, make predictions, and solve complex problems.</p>
                <ul className=" flex text-black-500 justify-center space-x-4 mt-4">
                  <li><a href="https://github.com/hrishagossain" className="text-black-500 hover:text-blue-700"><FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                  <li><a href="https://www.linkedin.com/in/hrisha-gossain-ba4241268/" className="text-black-500 hover:text-pink-700"><FaLinkedin className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                </ul>
              </div>
              <div className="team-item p-6 bg-white shadow-lg rounded-lg hover:border-2 hover:border-yellow-600 hover:shadow-xl transition duration-300 ease-in-out">
                <img src="./public/ayush.jpeg" className="team-img rounded-full mx-auto mb-4 w-24 h-24 object-cover" alt="Vishal Parui" />
                <h3 className="text-center text-2xl font-semibold">Ayush Dey</h3>
                <div className="team-info text-center text-gray-500">
                  <p>AI Developer</p>
                </div>
                <p className="text-center text-gray-600 mt-2">An AI developer specializes in creating intelligent systems and applications using machine learning, data analysis, and automation. They build algorithms that enable machines to learn from data, make predictions, and solve complex problems.</p>
                <ul className=" flex text-black-500 justify-center space-x-4 mt-4">
                  <li><a href="https://github.com/Ayushdey0970" className="text-black-500 hover:text-blue-700"><FaGithub className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                  <li><a href="https://www.linkedin.com/in/ayushdey/" className="text-black-500 hover:text-pink-700"><FaLinkedin className="text-2xl hover:text-gray-700 transition-colors duration-300" /></a></li>
                </ul>
              </div>

            </div> 
          </div>
        </section>
      </div>
    )
}

export default Teams;
