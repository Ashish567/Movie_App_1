import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageCard from "../card/ImageCard";
import { GridList } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import tileData from "../gridTileList/tileData";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridListTile from "@material-ui/core/GridListTile";
// import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

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

export default function GridList2() {
  const classes = useStyles();

  return (
    <GridList cols={4} cellHeight={350} style={{ padding: 2,margin:1}}>
      {tileData.movies.map((item) => (
        <GridListTile key={item.poster_url} className={classes.imageList}>
          <img src={item.poster_url} alt={item.title} />
          <GridListTileBar title={item.title} className={classes.titleBar} />
        </GridListTile>
      ))}
    </GridList>
  );
}
