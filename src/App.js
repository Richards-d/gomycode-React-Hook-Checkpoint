// Use React hooks (useState) to manage the movies and filters.

import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import AddMovie from "./Components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://images.affiches-et-posters.com//albums/3/4532/medium/4532-affiche-film-inception-cast.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space to save mankind.",
      posterURL: "https://images.affiches-et-posters.com//albums/3/24296/medium/affiche-film-interstellar-sea-88024.jpg",
      rating: 4,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  return (
    <div className="App">
      <Filter setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;