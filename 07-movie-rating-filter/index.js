const movies = [
  { title: "Inception", rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { title: "Tenet", rating: 7.4, genre: "Sci-Fi" },
  { title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
  { title: "The Prestige", rating: 8.5, genre: "Drama" },
  { title: "Batman v Superman", rating: 6.5, genre: "Action" },
];

const highRatingMovies = movies
  .filter((movie) => movie.rating > 8)
  .map((movie) => "🌟" + movie.title + "-" + "Rating:" + movie.rating);

console.log(highRatingMovies);

// output [
//   '🌟Inception - Rating: 8.8',
//   '🌟The Dark Knight - Rating: 9',
//   '🌟Interstellar - Rating: 8.6',
//   '🌟The Prestige - Rating: 8.5'
// ]
