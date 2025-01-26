import React from 'react'
import {Link} from "react-router-dom";

const Poster=({title,posterPath,isDark,key,id})=>
  {
    return(
      <Link to={`/movie/${id}`}>

<div className="flex flex-col items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
         <img
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt="poster"
          className='w-full h-full rounded-md'
         />
        </div>
        <h3
          className={`text-lg font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>

        </div>
      </Link>
        

      
    )
  }


export default Poster 