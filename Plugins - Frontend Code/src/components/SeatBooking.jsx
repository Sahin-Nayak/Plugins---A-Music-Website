import React, { useState } from 'react';

const SeatBooking = () => {
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});

  const concerts = ['Concert 1', 'Concert 2', 'Concert 3', 'Concert 4', 'Concert 5', 'Concert 6', 'Concert 7', 'Concert 8', 'Concert 9', 'Concert 10', 'Concert 11', 'Concert 12'];
  const seats = Array.from({ length: 100 }, (_, index) => `Seat ${index + 1}`);

  const handleConcertClick = (concert) => {
    setSelectedConcert(concert);
    setSelectedSeats({}); // Reset seat selection
  };

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) => ({
      ...prev,
      [seat]: !prev[seat], // Toggle seat selection
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white p-5">
      {/* Slider */}
      <div className="slider h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-8">
        <h2 className="text-2xl font-bold text-yellow-300">Slider Content Here</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Concert Details */}
        <div className="concert-list bg-gray-800 p-5 rounded-lg shadow-md overflow-y-auto h-[50vh] lg:h-auto scrollbar-hidden">
            <h3 className="text-xl font-semibold text-yellow-300 mb-4">Concert Details </h3>
            <ul className="space-y-3 max-h-[calc(50vh-60px)] overflow-y-auto scrollbar-hidden">
                {concerts.map((concert, index) => (
                <li
                    key={index}
                    onClick={() => handleConcertClick(concert)}
                    className={`cursor-pointer p-2 rounded-lg transition duration-300 text-lg hover:bg-yellow-300 hover:text-gray-900 ${selectedConcert === concert ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white'}`}
                >
                    {concert}
                </li>
                ))}
            </ul>
        </div>

        {/* Right - 3D Seat Booking */}
        <div className="seat-booking col-span-2 bg-gray-800 p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-yellow-300 mb-4">
            {selectedConcert ? `Booking for: ${selectedConcert}` : 'Select a Concert'}
          </h3>
          <div className="seat-grid grid grid-cols-10 gap-4 overflow-y-auto max-h-[40vh] scrollbar-hidden p-2 rounded-lg">
            {seats.map((seat, index) => (
              <div
                key={index}
                onClick={() => handleSeatClick(seat)}
                className={`w-22 h-12 flex items-center justify-center rounded-lg cursor-pointer transition duration-300 text-lg font-semibold ${selectedSeats[seat] ? 'bg-green-500 text-white' : 'bg-gray-600 hover:bg-yellow-300 hover:text-gray-900'}`}
              >
                {/* {seat} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
