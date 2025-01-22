import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([]); // State for fetched images
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmODU4YTE2N2ZjZWQ3ZDM0MGZmNTM0YWFjOTE2ZSIsIm5iZiI6MTczNzEzNDExOS4zOSwic3ViIjoiNjc4YTkwMjdkYmZlNTBhYTNkMWQyYTNmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.zwvtRXpQjm1EbIHWLXbl8iwKvY5EK6LYwPmapq4738Q", // Replace 'YOUR_API_KEY' with the correct token
        },
      };

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setImages(data.results); // Store the fetched movie data
        } else {
          setImages([]);
          setError("No movies found!");
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Something went wrong! Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(); // Trigger movie fetch
  }, []); // Run only once on component mount

  const settingsLG = {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    ...settingsLG,
  };

  // Loading and error states
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      {/* For small screens */}
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((movie, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title || "Hero Banner"}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      {/* For large screens */}
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((movie, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title || "Hero Banner"}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;


