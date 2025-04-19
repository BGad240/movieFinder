import React from 'react'
import { fetchMovies } from '../api/api'
import { useState, useEffect } from 'react'
import MoviesSlider from '../components/MoviesSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MoviesContext } from "../context/MoviesProvider";
import { useContext } from "react";
import { BounceLoader } from "react-spinners";
const Home = () => {
  const [movies, setMovies] = useState([])
  const { nowPlayingValue, popularValue, trendingValue, tvPopValue } = useContext(MoviesContext)
  const [loading, setLoader] = useState(false)
  useEffect(() => {
    const fetchMovie = async () => {
      setLoader(true)
      try {
        const response = await fetchMovies()
        setMovies(response)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      } finally {
        setLoader(false)
      }
    }
    fetchMovie()
  }, [])



  return (
    <div className=''>
      {
        loading ? (
          <div className="loader w-[100%] h-screen bg-black flex items-center justify-center gap-4">
            <BounceLoader color="#ff5733" size={100} />
            <BounceLoader color="#ff5733" size={60} />
            <BounceLoader color="#ff5733" size={100} />
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              className="w-full h-full"
            >
              {movies.slice(0, 5).map(movie => (
                <SwiperSlide key={movie.id} className="w-full h-[100vh]">
                  <div
                    style={{
                      backgroundImage: `url(${movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                        : "https://image.tmdb.org/t/p/w1280/8eifdha9GQeZAkexgtD45546XKx.jpg"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100vh",
                      width: "100%",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-black/5"></div>

                    <div className='flex items-center relative z-[100] h-[100vh] w-[90%] mx-auto justify-around gap-6'>
                      <div className='text-white w-fit '>
                        <h1 className='text-[40px]'>{movie.title}</h1>
                        <p className='max-w-[600px]'>
                          {movie.overview.slice(0, 140)}
                        </p>
                        <div className='flex mt-[40px]'>
                          <button className='w-[160px] h-[40px] bg-red-700 hover:bg-red-600 translate-colors rounded-lg'>show details</button>
                          <button></button>
                        </div>
                      </div>
                      <div className='hidden md:block'>
                        <img
                          className='max-w-[400px] lg:max-w-[500px] rounded-sm'
                          src={movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
                            : "https://image.tmdb.org/t/p/w1280/8eifdha9GQeZAkexgtD45546XKx.jpg"}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='my-[120px] '>
              <h1 className='text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600'>
                <span className='text-[60px] text-red-600 ml-[20px]'>P</span>opular Movies
              </h1>
              <MoviesSlider mv={movies} show="movie" />
            </div>

            <div className='my-[120px]'>
              <h1 className='text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600'>
                <span className='text-[60px] text-red-600 ml-[20px]'>N</span>ow Playing Movies
              </h1>
              <MoviesSlider mv={nowPlayingValue} show="movie" />
            </div>

            <div className='my-[120px]'>
              <h1 className='text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600'>
                <span className='text-[60px] text-red-600 ml-[20px]'>T</span>rending Movies
              </h1>
              <MoviesSlider mv={trendingValue} show="movie" />
            </div>

            <div className='my-[120px]'>
              <h1 className='text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600'>
                <span className='text-[60px] text-red-600 ml-[20px]'>P</span>opular Tv Shows
              </h1>
              <MoviesSlider mv={tvPopValue} show="show" />
            </div>
          </>
        )
      }
    </div>
  );

};
export default Home