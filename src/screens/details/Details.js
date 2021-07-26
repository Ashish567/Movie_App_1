import React, { useState } from "react";
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
import { getMovie } from "../../Actions/usersActions";
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [moviez, setMovie] = useState([]);
  console.log("movie");
  console.log(props);
  console.log(props.getMovie("7d174a25-ba31-45a8-85b4-b06ffc9d5f8f"));
  console.log("after dispatching");
  console.log(props.movies);
  const movie = {
    id: "8d71c3b8-a293-11e8-9a3a-720006ceb890",
    title: "Mile 22",
    storyline:
      "Mile 22 is a 2018 American action thriller film directed by Peter Berg and written by Lea Carpenter, from a story by Carpenter and Graham Roland. The film stars Mark Wahlberg, John Malkovich, Lauren Cohan, Iko Uwais, Ronda Rousey, and follows an elite CIA task force, composed of paramilitary officers from Ground Branch of Special Activities Division, that has to escort a high-priority asset 22 miles to an extraction point while being hunted by terrorists.",
    genres: ["Action", "Thriller"],
    duration: 95,
    poster_url: "https://upload.wikimedia.org/wikipedia/en/4/41/Mile_22.png",
    trailer_url: "https://www.youtube.com/watch?v=eJU6S5KOsNI",
    wiki_url: "https://en.wikipedia.org/wiki/Mile_22",
    release_date: "2018-09-19",
    censor_board_rating: "UA",
    rating: 6.1,
    status: "PUBLISHED",
    artists: [
      {
        id: "3097b8f4-a294-11e8-9a3a-720006ceb890",
        first_name: "Peter",
        last_name: "Berg",
        role_type: "DIRECTOR",
        profile_description:
          "Peter Berg (born March 11, 1964) is an American director, producer, writer, and actor. In television, Berg developed Friday Night Lights (2006–2011), adapted from his film, earning two Primetime Emmy Award nominations. As an actor, he is best known for his role as Dr. Billy Kronk on the CBS medical drama Chicago Hope (1995–1999).",
        profile_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Peter_Berg_by_Gage_Skidmore.jpg/440px-Peter_Berg_by_Gage_Skidmore.jpg",
        wiki_url: "https://en.wikipedia.org/wiki/Peter_Berg",
      },
      {
        id: "9df46816-a294-11e8-9a3a-720006ceb890",
        first_name: "Mark",
        last_name: "Wahlberg",
        role_type: "PRODUCER",
        profile_description:
          "PMark Robert Michael Wahlberg (born June 5, 1971) is an American actor, producer, businessman, former model, rapper and songwriter. He was known by his stage name Marky Mark in his early career as frontman for the group Marky Mark and the Funky Bunch, releasing the albums Music for the People and You Gotta Believe.",
        profile_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Wahlberg_2017.jpg/440px-Mark_Wahlberg_2017.jpg",
        wiki_url: "https://en.wikipedia.org/wiki/Mark_Wahlberg",
      },
      {
        id: "1dd86f90-a296-11e8-9a3a-720006ceb890",
        first_name: "John",
        last_name: "Malkovich",
        role_type: "ACTOR",
        profile_description:
          "John Gavin Malkovich (born December 9, 1953) is an American actor, director, producer and fashion designer. He has appeared in more than 70 films. For his roles in Places in the Heart and In the Line of Fire, he received Academy Award nominations. He appeared in such films as Empire of the Sun, The Killing Fields, Con Air, The Sheltering Sky, Of Mice and Men, Rounders, Knockaround Guys, Being John Malkovich, Shadow of the Vampire, Burn After Reading, Red, Red 2, Mulholland Falls, Dangerous Liaisons, and Warm Bodies, as well as producing films such as Ghost World, Juno, and The Perks of Being a Wallflower.",
        profile_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/John_Malkovich_at_a_screening_of_%22Casanova_Variations%22_in_January_2015.jpg/440px-John_Malkovich_at_a_screening_of_%22Casanova_Variations%22_in_January_2015.jpg",
        wiki_url: "https://en.wikipedia.org/wiki/John_Malkovich",
      },
    ],
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    console.log("player debugged");
    console.log(event.target);
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
                  image={movie.poster_url}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </div>
          <div style={{ width: "60%", marginLeft: 20 }}>
            <Typography variant="h2">{movie.title}</Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Genres:
              </Box>
              {movie.genres}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Duration:
              </Box>
              {movie.duration}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Release Date:
              </Box>
              {movie.release_date}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Rating:
              </Box>
              {movie.rating}
            </Typography>
            <Typography>
              <Box fontWeight="fontWeightMedium" display="inline">
                Plot:
                <a href={movie.wiki_url}>(Wiki link)</a>
              </Box>
              {movie.storyline}
            </Typography>
            <YouTube
              videoId={movie.trailer_url.split("=")[1]}
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
            <GridList
              cols={2}
              cellHeight={350}
              style={{ padding: 2, margin: 1 }}
            >
              {movie.artists.map((item) => (
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
          </div>
        </Box>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ movie: state.movie });

export default connect(mapStateToProps, { getMovie })(Details);
