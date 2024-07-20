import axios from "axios";

const baseURL = "https://moviesbackend-production-3742.up.railway.app"

export const getMovies = async () => {
    const response = await axios.get(`${baseURL}/api/movies`);
    return response.data;
}
export const getOneMovie = async (movieId) => {
    console.log(movieId.movieId)
    const response = await axios.get(`${baseURL}/api/movies/${movieId.movieId}`);
    return response.data;
}
export const addReview = async (req, res) => {
    try {
        // eslint-disable-next-line
        const response = await axios.post(`${baseURL}/api/reviews`, { body: req.body, imdbId: req.imdbId })
        
        return res;
    }
    catch (e) {
        console.log(e);
    }
    
}