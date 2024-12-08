import { defineStore } from 'pinia';
import axios from 'axios';
import { Movie } from '../types/Movie';
export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: <Movie[]>([]),
    }),
    actions: {
        async fetchMovies() {
            const response = await axios.get('http://localhost:8000/api/movies/');
            this.movies = response.data;
            console.log(this.movies)
            
        },
        async addMovie(movie: Movie) {
            await axios.post('http://localhost:8000/api/movies/', movie);
            this.fetchMovies();
        },
        async deleteMovie(id: number) {
            await axios.delete(`http://localhost:8000/api/movies/${id}/`);
            this.fetchMovies();
        },
    },
});
