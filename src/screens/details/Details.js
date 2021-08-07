import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import "./Details.css";

import { Link } from "react-router-dom";

import YouTube from "react-youtube";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridListTile from "@material-ui/core/GridListTile";
import { GridList } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 440,
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
});

function Details(props) {
  console.log("Receiving props in Details Page");

  const {
    poster_url,
    title,
    genres,
    duration,
    storyline,
    rating,
    release_date,
    trailer_url,
    wiki_url,
    artists,
  } = props.movie;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function _onReady(event) {
    event.target.playVideo();
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  // return "Hello";
  if (props.loading) {
    console.log("loading....");
    return "loading....";
  }
  return (
    <div>
      <Header />
      <div style={{ width: "100%", marginTop: 16 }}>
        <Link to="/">
          <Typography
            style={{
              marginLeft: 24,
              marginTop: 8,
              marginBottom: 0,
              height: 24,
              cursor: "pointer",
            }}
            align="left"
          >
            &lt; Back To Home
          </Typography>
        </Link>
        <Box
          style={{ marginLeft: 24, marginTop: 8 }}
          display="flex"
          p={1}
          bgcolor="background.paper"
        >
          <div style={{ width: "20%" }}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={poster_url}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </div>
          <div style={{ width: "60%", marginLeft: 20 }}>
            <Typography variant="h2">{title}</Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Genres:
              </Box>
              {genres}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Duration:
              </Box>
              {duration}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Release Date:
              </Box>
              {release_date}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Rating:
              </Box>
              {rating}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Plot:
                <a href={wiki_url}>(Wiki link)</a>
              </Box>
              {storyline}
            </Typography>
            <YouTube
              videoId={trailer_url.split("=")[1]}
              opts={opts}
              onReady={_onReady}
              style={{ marginTop: 80 }}
            />
          </div>

          <div style={{ width: "30%" }}>
            <Typography style={{ marginBottom: "16px" }}>
              <Box fontWeight="fontWeightMedium" display="inline">
                Rate this movie:
              </Box>
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            {artists !== null && artists.length > 0 ? (
              <GridList
                cols={2}
                cellHeight={350}
                style={{ padding: 2, margin: 1 }}
              >
                {artists.map((item) => (
                  <GridListTile
                    key={item.profile_url}
                    className={classes.imageList}
                  >
                    <img
                      src={item.profile_url}
                      alt={item.first_name + " " + item.last_name}
                    />
                    <GridListTileBar
                      title={item.first_name + " " + item.last_name}
                      className={classes.titleBar}
                    />
                  </GridListTile>
                ))}
              </GridList>
            ) : (
              <div>
                <br />
                <p>No Artists Found</p>
              </div>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { movie: state.movie.movie, loading: state.movie.loading };
};

export default connect(mapStateToProps)(Details);
