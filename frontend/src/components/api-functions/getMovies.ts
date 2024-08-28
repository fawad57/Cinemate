// Define the type for the movie object
interface Movie {
  id: number;
  title: string;
  trailerLink: string;
  backdrop_path: string;
  genres: string[];
  overview: string;
  duration: number;
  rating: number;
  tagline: string;
  language: string;
  poster: string;
  // Add more properties as needed
}

// Define the type for the API response
interface ApiResponse {
  results: Movie[];
  // Add more properties as needed
}

// Define the function to fetch trailers
const fetchTrailers = async (movieId: number): Promise<string[]> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg1MGY4YTI5YTdiZjk3MzRlOTZhMzQ5NjM0N2M2ZSIsInN1YiI6IjY1ZDFmZWZiZGI3MmMwMDE4NjM5ZWJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvzlBGIBkGdBZTIWWexNWdBlXUtXdz1trAmNZO36tnQ",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const data = await response.json();
    return data.results.map(
      (trailer: { key: string }) =>
        `https://www.youtube.com/watch?v=${trailer.key}`
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDetails = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg1MGY4YTI5YTdiZjk3MzRlOTZhMzQ5NjM0N2M2ZSIsInN1YiI6IjY1ZDFmZWZiZGI3MmMwMDE4NjM5ZWJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvzlBGIBkGdBZTIWWexNWdBlXUtXdz1trAmNZO36tnQ",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch details. Status: ${response.status}`);
    }
    const details = await response.json();
    return details;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error for further handling if needed
  }
};

// Define the function to get movies with trailers
export const getMovies = async (): Promise<Movie[]> => {
  const apiUrl =
    "https://api.themoviedb.org/3/account/21016052/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDg1MGY4YTI5YTdiZjk3MzRlOTZhMzQ5NjM0N2M2ZSIsInN1YiI6IjY1ZDFmZWZiZGI3MmMwMDE4NjM5ZWJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvzlBGIBkGdBZTIWWexNWdBlXUtXdz1trAmNZO36tnQ",
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: ApiResponse = await response.json();

    // Assuming the response has a 'results' property containing an array of movies
    const movies: Movie[] = [];

    for (const movie of responseData.results) {
      // Fetch trailers for each movie
      const trailers = await fetchTrailers(movie.id);
      const details = await fetchDetails(movie.id);

      //last element of trailers array is the trailer link
      const trailerLink = trailers[trailers.length - 1];
      movies.push({
        id: details.id,
        title: details.title,
        trailerLink,
        backdrop_path: `https://image.tmdb.org/t/p/original${details.backdrop_path}`,
        genres: details.genres.map((genre: { name: string }) => genre.name),
        overview: details.overview,
        duration: details.runtime,
        rating: details.vote_average,
        tagline: details.tagline,
        language: details.spoken_languages[0].english_name,
        poster: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
      });
    }

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    // You can handle errors appropriately, e.g., return an empty array or throw an error
    return [];
  }
};

export const getSingleMovie = async (movieId: number) => {
  const trailers = await fetchTrailers(movieId);
  const details = await fetchDetails(movieId);

  //last element of trailers array is the trailer link
  const trailerLink = trailers[trailers.length - 1];

  const movie: Movie = {
    id: details.id,
    title: details.title,
    trailerLink,
    backdrop_path: `https://image.tmdb.org/t/p/original${details.backdrop_path}`,
    genres: details.genres.map((genre: { name: string }) => genre.name),
    overview: details.overview,
    duration: details.runtime,
    rating: details.vote_average,
    tagline: details.tagline,
    language: details.spoken_languages[0].english_name,
    poster: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
  };

  return movie;
};
