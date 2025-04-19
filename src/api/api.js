const url = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (page = 1) => {
    try {
        const res = await fetch(`${url}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        console.log(data)
        return data.results

    } catch (error) {
        console.log("error is: ", error)
        return []
    }
}





export const fetchAllMovies = async (pages = 3) => {
    try {
        const allResults = [];

        for (let i = 1; i <= pages; i++) {
            const res = await fetch(`${url}/movie/popular?api_key=${API_KEY}&language=en-US&page=${i}`);
            const data = await res.json();
            allResults.push(...data.results);
        }

        return allResults;

    } catch (error) {
        console.log("error is: ", error)
        return []
    }
}
export const fetchTvSrs = async (page = 1) => {
    try {
        const res = await fetch(`${url}/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        const data = await res.json()
        return data.results
    } catch (error) {
        console.log("error is: ", error)
        return []
    }
}

export const fetchMvDtls = async (id) => {
    try {
        const res = await fetch(`${url}/movie/${id}?api_key=${API_KEY}&language=en-US`)
        return await res.json()
    } catch (error) {
        console.log("error is: ", error)
        return []
    }
}

export const fetchShDtls = async (id) => {
    try {
        const res = await fetch(`${url}/tv/${id}?api_key=${API_KEY}&language=en-US`)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("error is: ", error)
    }
}


export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${url}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();
    return data.results;
};



export const nowPlaying = async () => {
    try {
        const res = await fetch(`${url}/movie/now_playing?api_key=${API_KEY}&language=en-US`)
        const data = await res.json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}

export const trending = async () => {
    try {
        const trendy = await fetch(`${url}/trending/movie/day?api_key=${API_KEY}&language=en-US`)
        const data = await trendy.json()
        return data.results
    } catch (error) {
        console.log(error);
    }
}




export const fetchGenMv = async () => {
    try {
        const res = await fetch(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        const data = await res.json()
        return data.genres
    } catch (error) {
        console.log(error)
    }
}