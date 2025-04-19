import { MenuIcon, Search, X } from 'lucide-react'
import React from 'react'
import { fetchAllMovies } from '../api/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const SearchP = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const movies = async () => {
      try {
        const res = await fetchAllMovies(10)
        setMovies(res)
      } catch (error) {

      }
    }
    movies()

  }, [])



  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)

    const res = movies.filter((mv) => {
      return mv.title.toLowerCase().includes(value)
    })
    setMovie(res)
    if (value.trim() === "") {
      setMovie([])
      return
    }
  }
  console.log("helllooooo", movie)
  console.log(movies)
  return (
    <div className='w-[90%] mx-auto min-h-[90vh]'>
      <div className='w-fit mx-auto relative z-[100]'>
        <div className='text-center relative top-[200px] sm:w-[100%] md:w-[70vw] rounded-md bg-white mx-auto flex justify-between p-[10px] h-[55px]'>
          <input type="text" className='border-none focus:outline-none flex-1 bg-transparent' placeholder='Search Your movie' onChange={handleSearch} value={query || ""} />
          <button><Search /></button>
        </div>
        {
          query && movie.length > 0 && (
            <div className='absolute top-[270px] left-1/2 transform -translate-x-1/2 bg-white md:w-[80%] rounded-md p-[10px] max-h-[400px] overflow-y-auto custom-scroll'>


              {
                movie.map(mv => {
                  return (
                    <Link to={`/movie/${mv.id}`}
                      className=' border-b p-[10px] cursor-pointer flex items-center gap-4 text-muted-foreground hover:bg-slate-200 rounded-md'>
                      <img src={`https://image.tmdb.org/t/p/w1280${mv.backdrop_path}`} alt="" className='max-w-[100px] rounded-md' />
                      <p>{mv.title}</p>
                    </Link>)
                })
              }
            </div>)
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default SearchP