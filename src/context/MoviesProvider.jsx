import { createContext, useEffect, useState } from 'react'
import { trending, getPopularMovies, nowPlaying, fetchTvSrs } from '../api/api'

export const MoviesContext = createContext()

const MoviesProvider = ({ children }) => {
  const [nowPlayingValue, setNowPlaying] = useState([]);
  const [popularValue, setPopular] = useState([]);
  const [trendingValue, setTrending] = useState([]);
  const [tvPopValue, setTvPop] = useState([])


  useEffect(() => {
    const moviesFetch = async () => {
      try {
        const [trendFetch, popularFetch, nowFetch, tvPopFetch] = await Promise.all([
          trending(),
          getPopularMovies(),
          nowPlaying(),
          fetchTvSrs()
        ])

        setTrending(trendFetch || [])
        setPopular(popularFetch || [])
        setNowPlaying(nowFetch || [])
        setTvPop(tvPopFetch || [])
      } catch (error) {
        console.log(error)
      }
    }
    moviesFetch()
  }, [trendingValue])
  

  return (
    <MoviesContext.Provider value={
      {
        nowPlayingValue,
        popularValue,
        trendingValue,
        tvPopValue
      }
    }>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider