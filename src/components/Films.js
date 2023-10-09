import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import FilmsData from '../shared/ListOfFilms';


export default function Films() {
  const [Films, setFilmData] = useState([]);
  const { theme } = useContext(ThemeContext); // Access the theme from context

  return (
    <div className="films-container">
    {FilmsData.map((film) => (
      <div key={film.id} className="film-item">
        <img src={film.image} alt={film.title} />
        <h2>
          {film.title}
        </h2>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <button onClick={() => { setFilmData(film) }}>
          <Link to={`detail/${film.id}`}>
            <p>Detail</p>
          </Link>
        </button>
      </div>
    ))}
    <div id='popup1' className='overlay' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: theme.color }}>
      <div className='popup' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <p style={{ textAlign: 'center' }}>
          <iframe
            width="560"
            height="315"
            src={Films.Video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </p>
        <div style={{ width: '560px', color: theme.color }}>
          <h2 style={{ fontFamily: 'Tahoma, Arial, sans-serif', marginTop: '0' }}> {Films.title} </h2>
          <a className='close' href='#'>&times;</a>
          <div className='content'>
            <p style={{ textIndent: '1em' }}>{Films.info}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

