import React from "react";
import { useParams } from "react-router-dom";
import FilmsData from "../shared/ListOfFilms";
import { Icon, Button, Paper } from "@mui/material";
import ModalCase from "./ModalCase";
import { useState } from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  iframe: {
    width: "560px",
    height: "315px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  info: {
    fontSize: "16px",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

export default function Detail() {
  const classes = useStyles();
  const filmName = useParams();

  const film = FilmsData.find((obj) => {
    return obj.id == filmName.id;
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Paper className={classes.root}>
      <div>
        <iframe
          className={classes.iframe}
          src={film.Video}
          title={film.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ width: "560px" }}>
        <div className={classes.title}>
          <b>{film.title}</b>
        </div>
        <i>Years: {film.year}</i>
        <p>Country: {film.nation}</p>

        <div className={classes.info}>{film.info}</div>

        
        {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
      </div>
    </Paper>
  );
}
