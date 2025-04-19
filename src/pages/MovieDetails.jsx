import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMvDtls } from '../api/api'
import { BounceLoader } from "react-spinners";
import { Clock } from 'lucide-react';



const MovieDetails = () => {

  const { id } = useParams()
  const [mvDtls, setMvDtls] = useState([])
  const [loading, setLoading] = useState(false)
  const [genres, setGen] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      try {
        console.log("Fetching movie details for ID:", id)
        const response = await fetchMvDtls(id)
        setMvDtls(response)
        setGen(response.genres)
      } catch (error) {
        console.error("Error fetching movie details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])




  console.log("movie details", mvDtls);
  console.log("genres details", genres);


  return (
    <div>
      {
        loading ? (<div className="loader w-[100%] h-screen bg-black flex items-center justify-center">
          <BounceLoader color="#ff5733" size={100} />;
          <BounceLoader color="#ff5733" size={60} />;
          <BounceLoader color="#ff5733" size={100} />;
        </div>) : (
          <div
            className="hero min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center md:py-[30px] py-[0]"
            style={{
              backgroundImage: mvDtls?.backdrop_path
                ? `url(https://image.tmdb.org/t/p/w1280${mvDtls.backdrop_path})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/100  via-black/70 to-black/5"></div>
            <div className='relative z-{100} flex gap-[30px] max-w-[70%] mx-auto flex-wrap'>
              <div>
                <img src={mvDtls?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w1280${mvDtls.backdrop_path}`
                  : "https://via.placeholder.com/500x300?text=No+Image"}
                  className="h-[500px] w-[300px] object-cover rounded-[18px]"
                  alt="" />
              </div>
              <div className='sm:max-w-[90%] md:max-w-[50%]'>
                <h1 className=" text-4xl font-bold text-white mb-[20px] relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-[70px] before:h-[5px] before:bg-red-500 ">{mvDtls?.title}</h1>
                <p className="text-lg text-white max-w-[100%] relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:w-[100%] before:h-[1px] before:bg-red-700 ">{mvDtls?.overview}</p>
                {genres.length>0 &&
                  <div className='my-10'>
                    <span className='text-2xl text-white font-semibold block mb-4'>Genres:</span>
                    <div className='flex flex-wrap gap-4'>
                      {genres.map((genre) => (
                        <span
                          key={genre.id}
                          className='cursor-pointer text-lg px-6 py-2 bg-white text-black border border-gray-300 rounded-full 
                  transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-lg'
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                }
                <div className="my-6 space-y-4">
                  <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
                    <span className="text-xl text-white font-semibold w-[100px]">
                      Runtime:
                    </span>
                    <div className="text-lg text-white flex items-center gap-2">
                      {mvDtls?.runtime} minutes
                      <Clock className="text-red-500 w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
                    <span className="text-xl text-white font-semibold w-[100px]">
                      Rate:
                    </span>
                    <div className="text-lg text-white flex items-center gap-2">
                      {Math.floor(mvDtls?.vote_average)}/10
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-b border-gray-700 pb-2">
                    <span className="text-xl text-white font-semibold w-[100px]">
                      Votes:
                    </span>
                    <div className="text-lg text-white flex items-center gap-2">
                      {Math.floor(mvDtls?.vote_count)}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>)
      }
    </div>
  )

};

export default MovieDetails
