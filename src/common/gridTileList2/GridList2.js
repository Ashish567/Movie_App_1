import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageCard from "../card/ImageCard";
import { GridList } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
// import tileData from "../gridTileList/tileData";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridListTile from "@material-ui/core/GridListTile";
// import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { connect } from "react-redux";
import { getMovies, getMovie } from "../../Actions/usersActions";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    margin: 20,
  },
  imageList: {
    height: 350,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

function GridList2(props) {
  const [movieList, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const classes = useStyles();

  React.useEffect(() => {
    props.getMovies({ page: 1, limit: 20 });
    console.log("1st loaded");
    setMovies(props.movies.movies);
  }, []);

  const getSelectedMovie = (event, d) => {
    props.getMovie(d.id);
  };
  return (
    <GridList cols={4} cellHeight={350} style={{ padding: 2, margin: 1 }}>
      {props.movies.movies.map((item) => (
        <GridListTile key={item.poster_url} className={classes.imageList}>
          <img src={item.poster_url} alt={item.title} />
          <Link
            to={{
              pathname: "/details",
              selectedMovieId: { ...item },
            }}
            onClick={(event) => getSelectedMovie(event, item)}
          >
            <GridListTileBar title={item.title} className={classes.titleBar} />
          </Link>
        </GridListTile>
      ))}
    </GridList>
  );
}

const mapStateToProps = (state) => ({ movies: state.movies });

const mapDispatchToProps = (dispatch) => ({
  getMovies: (params) => {
    dispatch(getMovies(params));
  },
  getMovie: (params) => {
    dispatch(getMovie(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GridList2);
