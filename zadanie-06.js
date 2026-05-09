const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true, year: 2016 },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false, year: 2014 },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false, year: 1984 },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true, year: 2015 }
];

const notWatchedMovies = movies.filter((movie) => !movie.watched);
const highRatedMovies = movies.filter((movie) => movie.rating > 8.0);
const recommendedTitles = notWatchedMovies.filter((movie) => movie.rating >= 8.0).map((movie) => movie.title);
const newestOnTheList = movies.filter((movie) => movie.year >= 2016).map((movie) => `${movie.title} (${movie.year})`);

console.log("Raport filmów");
console.log(`Nieobejrzane: ${notWatchedMovies.map((movie) => movie.title).join(", ")}`);
console.log(`Ocena powyżej 8.0: ${highRatedMovies.map((movie) => movie.title).join(", ")}`);
console.log(`Rekomendowane tytuły do obejrzenia: ${recommendedTitles.join(", ")}`);
console.log(`Filmy z ostatniej dekady: ${newestOnTheList.join(", ")}`);
// filter() zostało użyte wielokrotnie
// mapowanie tytułów powoduje że nie mutujemy oryginalnej tablicy
// dodano rok filmu oraz listę pozycji z ostatniej dekady.
// najtrudniejsze było dobranie warunków dla elementów rozszerzających podstawową treść.
