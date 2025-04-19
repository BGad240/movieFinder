import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import SearchP from "./pages/SearchP"
import Navbar2 from "./components/Navbar2"
import AllMovies from "./pages/AllMovies"
import MoviesProvider from "./context/MoviesProvider"
import Footer from "./components/Footer"
import MovieCate from "./pages/MovieCate"
import ShowDetails from "./pages/ShowDetails"
import NotFound from "./pages/NotFound"
import TvShows from "./pages/TvShows"

export default function App() {
  return (
    <>
      <MoviesProvider>
        <Router>
          <Navbar2 />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/show/:id" element={<ShowDetails />} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/search" element={<SearchP />} />
            <Route path="/tvSearies" element={<TvShows />} />
            {/* <Route path="/movie-by-cate" element={<MovieCate />} /> */}
          </Routes>
          <Footer />
        </Router>
      </MoviesProvider>


    </>
  )
}