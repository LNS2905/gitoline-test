import React from "react";
import films from "./ListOfFilms"; // Import danh sách các bộ phim

function Films() {
  return (
    <div className="films-container">
      {films.map((film) => (
        <div key={film.id} className="film-item">
          <img src={film.image} alt={film.title} />
          <h2>{film.title}</h2>
          <p>Year: {film.year}</p>
          <p>Nation: {film.nation}</p>
        </div>
      ))}
    </div>
  );
}

export default Films;
