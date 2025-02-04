import React,{useContext,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import PaymentModal from "./PaymentModal";

const MovieInfo=()=>
    {
        const { price, setIsOpen, isOpen, rentMovie, buyMovie, movie } =
        useContext(MovieContext);
        const navigate=useNavigate() ;
        const {id}=useParams() ;
        const[isModalOpen,setIsModalOpen]=useState(false);
       const bookTicket=()=>
        {
         navigate(`/booking/${id}`);
        }
        const genres = movie.genres?.map(({ name }) => name).join(", ");

        return (
            <>
             {/* <PaymentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} amount={price} /> */}
              <div className="flex flex-col gap-3 px-4 my-3">
                <h1 className="text-5xl font-bold text-white font-poppins">{movie.original_title}</h1>
                <div className="text-black flex flex-col gap-2 md:px-4">
                   <h4 className="font-semibold text-white font-poppins">4.2k rating</h4>
                  <h4 className="font-semibold text-white font-poppins">
                    Kannada, English, Hindi, Telegu, Tamil
                  </h4>
                  <h4 className="font-semibold text-white font-poppins">
                    {movie.runtime} min | {genres}
                  </h4>
                </div>
                <div className="flex items-center gap-3 ">
                
                  <button
                    className="bg-red-600 w-full py-3 pl-2 text-black font-semibold rounded-lg font-poppins"
                    // onClick={()=>setIsModalOpen(true)}
                    onClick={bookTicket}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </>
          );
        };
    export default MovieInfo