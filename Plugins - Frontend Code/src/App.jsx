// import {BrowserRouter, Routes,Route} from "react-router-dom"
// import Home from "./pages/Home"
// import AlbumDetails from "./pages/AlbumDetails"
// import SignUp from "./pages/SignUp"
// import Team from "./pages/Team"
// import SearchPage from "./pages/SearchPage"
// import Contact from "./pages/Contact"
// import TermsAndConditions from "./pages/TermsAndConditions"
// import SeatBook from "./pages/SeatBook"
// import Games from "./pages/Games";
// import HomePage from "./components/HomePage"; // for the video call app
// import Room from "./components/Room";
// import AfterLogin from "./pages/AfterLogin"
// import RequestSongs from "./pages/RequestSongs"

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/AlbumDetails" element={<AlbumDetails />}/>
//       <Route path="/SignUp" element={<SignUp />} />
//       <Route path="/Team" element={<Team />} />
//       <Route path="/SearchPage" element={<SearchPage />} />
//       <Route path="/Contact" element={<Contact />} />
//       <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
//       <Route path="/SeatBook" element={<SeatBook />} />
//       <Route path="/Games" element={<Games />} />
//       <Route path="/HomePage" element={<HomePage />} />
//       <Route path="/AfterLogin" element={<AfterLogin />} />
//       <Route path="/RequestSongs" element={<RequestSongs />} />
//       <Route path="/Room/:roomId" element={<Room />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import SignUp from "./pages/SignUp";
import Team from "./pages/Team";
import DemoAfterLogin from "./pages/DemoAfterLogin";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import SeatBook from "./pages/SeatBook";
import Games from "./pages/Games";
import HomePage from "./components/HomePage"; // for the video call app
import Room from "./components/Room";
import AfterLogin from "./pages/AfterLogin";
import RequestSongs from "./pages/RequestSongs";
import LyricsSearches from "./pages/LyricsSearches";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for the username when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      console.log("Username from localStorage:", storedUsername);
      setIsLoggedIn(true); // Set logged-in state to true if username exists
    } else {
      console.log("No username found in localStorage.");
      setIsLoggedIn(false); // Set logged-in state to false if no username
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Conditionally render the route based on isLoggedIn state */}
        {isLoggedIn ? (
          <Route path="/" element={<AfterLogin />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        
        <Route path="/DemoAfterLogin" element={<DemoAfterLogin />} />
        <Route path="/AlbumDetails" element={<AlbumDetails />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/lyrics" element={<LyricsSearches />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/SeatBook" element={<SeatBook />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/AfterLogin" element={<AfterLogin />} /> */}
        <Route path="/RequestSongs" element={<RequestSongs />} />
        <Route path="/Room/:roomId" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}
