import React from 'react'
import { useState, useEffect } from 'react'
import { fetchMovies } from "../api/api"
import { motion } from 'framer-motion'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BounceLoader } from "react-spinners";

const AllMovies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchMv = async (page) => {
            setLoading(true)
            const nMv = await fetchMovies(page)
            setMovies(prev => [...prev, ...nMv])
            setLoading(false)
        }
        fetchMv(page)
    }, [page])

    const btnStyle = "z-[1] before:z-[-1] before:h-[100%] before:w-[0] text-[17px] mx-auto border-[1px] px-[20px] py-[7px] rounded-full border-red-600 mr-[10px] relative before:content-[''] before:py-[7px] before:h-[100%] before:bg-red-400 before:absolute before:left-0 before:top-0 before:rounded-full hover:before:w-[100%] hover:before:h-[100%] before:duration-150 before:ease-out before:overflow-hidden before:inset-0 hover:before:rounded-[full] before:rounded-full";




    return (
        <div className='bg-black min-h-[100vh]'>
            {

                loading ? (<div className="loader w-[100%] h-screen bg-black flex items-center justify-center">
                    <BounceLoader color="#ff5733" size={100} />;
                    <BounceLoader color="#ff5733" size={60} />;
                    <BounceLoader color="#ff5733" size={100} />;
                </div>) :
                    (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className='bg-black h-fit p-[50px] mt-[20px]'>
                            <div className='grid sm:grid-cols-2 sm:mx-[auto]  md:grid-cols-3 lg:grid-cols-5 mx-[auto] w-[90%] gap-[25px] '>
                                {
                                    movies.map(mv => {

                                        return (
                                            <Link to={`/movie/${mv.id}`} key={mv.id}>
                                                <Card mv={mv} />
                                            </Link>
                                        )
                                    })
                                }

                            </div>
                            <button className='px-[25px] py-[7px] rounded-[20px] bg-transparent border border-white  text-[#fff] mx-[auto] block my-[30px] hover:text-red-600 hover:bg-white duration-200 font-semibold'
                                onClick={() => { setPage(prev => prev + 1) }}>load more</button>
                        </motion.div>)
            }
        </div >
    )
}

export default AllMovies