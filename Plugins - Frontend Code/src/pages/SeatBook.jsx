import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import SeatBooking from '../components/SeatBooking';


const SeatBook = () => {
  return (
    <div>
        <Navbar /><br /><br />
        <SeatBooking />
        <Footer />
    </div>
  )
}

export default SeatBook
