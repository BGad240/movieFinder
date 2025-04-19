import React, { useEffect, useState } from 'react'
import { fetchGenMv } from '../api/api'  // الدالة الجديدة لتحديد التصنيفات
import MoviesSlider from '../components/MoviesSlider'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Link } from 'react-router-dom'

const MovieCate = () => {
    const [actionMovies, setActionMovies] = useState([])
    const [comedyMovies, setComedyMovies] = useState([])
    const [horrorMovies, setHorrorMovies] = useState([])
    const [dramaMovies, setDramaMovies] = useState([])


    useEffect(() => {
        const fetchMoviesByCategories = async () => {
            try {
                const action = await fetchGenMv('28')
                const comedy = await fetchGenMv('35')
                const horror = await fetchGenMv('27')
                const drama = await fetchGenMv('18')

                setActionMovies(action)
                setComedyMovies(comedy)
                setHorrorMovies(horror)
                setDramaMovies(drama)
            } catch (error) {
                console.log('Error fetching movies:', error)
            }
        }

        fetchMoviesByCategories()
    }, [])

    
    console.log(dramaMovies)


    const btnStyle = "z-[1] before:z-[-1] before:h-[100%] before:w-[0] text-[17px] mx-auto border-[1px] px-[20px] py-[7px] rounded-full border-red-600 mr-[10px] relative before:content-[''] before:py-[7px] before:h-[100%] before:bg-red-400 before:absolute before:left-0 before:top-0 before:rounded-full hover:before:w-[100%] hover:before:h-[100%] before:duration-150 before:ease-out before:overflow-hidden before:inset-0 hover:before:rounded-[full] before:rounded-full";
    console.log(actionMovies)
    return (
        <div className="bg-black min-h-[100vh]">
            <div className="w-fit mx-auto mt-[130px] text-white">
                <button className={`${btnStyle}`}>all movies</button>
                <button className={`${btnStyle}`}><Link to='/movie-by-cates'>by category</Link></button>
            </div>

            <div className="my-[120px]">
                <h1 className="text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600">
                    <span className="text-[60px] text-red-600 ml-[20px]">A</span>ction Movies
                </h1>
                <MoviesSlider mv={actionMovies} />
            </div>

            <div className="my-[120px]">
                <h1 className="text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600">
                    <span className="text-[60px] text-red-600 ml-[20px]">C</span>omedy Movies
                </h1>
                <MoviesSlider mv={comedyMovies} />
            </div>

            <div className="my-[120px]">
                <h1 className="text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600">
                    <span className="text-[60px] text-red-600 ml-[20px]">H</span>orror Movies
                </h1>
                <MoviesSlider mv={horrorMovies} />
            </div>

            <div className="my-[120px]">
                <h1 className="text-white mb-[30px] text-[30px] border-b-[5px] w-fit border-red-600">
                    <span className="text-[60px] text-red-600 ml-[20px]">D</span>rama Movies
                </h1>
                <MoviesSlider mv={dramaMovies} />
            </div>
        </div>
    )
}

export default MovieCate
