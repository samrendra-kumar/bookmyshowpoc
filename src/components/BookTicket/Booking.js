import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import PaymentModal from "../MovieHero/PaymentModal";
const Booking = () => {
  const { id } = useParams(); // Extracting movie ID from URL
  
  const{movie}=useContext(MovieContext)
  const[isModalOpen,setIsModalOpen]=useState(false);
  // Seat arrangement and pricing
  const rows = {
    A: { seats: 10, price: 1000 },
    B: { seats: 10, price: 1000 },
    C: { seats: 10, price: 800 },
    D: { seats: 10, price: 800 },
    E: { seats: 8, price: 600 }, 
    F: { seats: 8, price: 600 },
    G: { seats: 6, price: 400 },
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Toggle seat selection
  const toggleSeatSelection = (row, seat, price) => {
    const seatId = `${row}${seat}`;
    setSelectedSeats((prev) =>
      prev.some((s) => s.id === seatId)
        ? prev.filter((s) => s.id !== seatId)
        : [...prev, { id: seatId, price }]
    );
  };

  // Calculate total price
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gradient-to-b from-red-700 to-black">
      {/* Header */}
      <h2 className="text-4xl font-bold text-black font-thin mb-2">🎟️ Book My Ticket</h2>
      <h3 className="text-xl font-semibold text-gray-300 mb-6">
        {movie?.original_title || "Loading..."} (INOX)
      </h3>

      {/* Seat Grid */}
      <div className="space-y-3 bg-black  bg-opacity-50 p-6 shadow-lg rounded-xl">
        {Object.entries(rows).map(([row, { seats, price }]) => (
          <div key={row} className="flex items-center justify-center space-x-2">
            <span className="font-semibold text-gray-700">{row} (₹{price})</span>
            {[...Array(seats)].map((_, index) => {
              const seatId = `${row}${index + 1}`;
              return (
                <button
                  key={seatId}
                  className={`w-10 h-10 text-sm font-semibold border rounded-lg flex items-center justify-center 
                    transition-all duration-200
                    ${
                      selectedSeats.some((s) => s.id === seatId)
                        ? "bg-green-500 text-white shadow-md shadow-green-500/50"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    }`}
                  onClick={() => toggleSeatSelection(row, index + 1, price)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Total Cost */}
      <h4 className="text-2xl font-semibold text-white mt-4">
        Total Price:<span className="text-red-400"> ₹{totalPrice}</span>
      </h4>

      {/* Payment Button */}
      
     
      <PaymentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} amount={ totalPrice} />
      <button 
        className="bg-red-500 text-black px-6 py-2 mt-6 rounded-lg font-semibold shadow-md hover:bg-red-700 transition duration-200 disabled:bg-gray-400"
        disabled={selectedSeats.length === 0}
        onClick={()=>setIsModalOpen(true)}
      >
        Pay ₹{totalPrice}
      </button>
    </div>
  );
};

export default Booking;


