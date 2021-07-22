import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import { filterMovies } from "../../Actions/usersActions";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FilterCard(props) {
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  // const isAllSelected =
  //   options.length > 0 && selected.length === options.length;

  const classes = useStyles();
  const [genre, setGenre] = React.useState([]);
  const [artist, setArtist] = React.useState([]);

  // const [val1, setValSel1] = React.useState([]);
  // const [val2, setValSel2] = React.useState([]);

  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2014-08-18T21:11:54")
  // );

  React.useEffect(() => {
    console.log("use Effect");
    axios.get(`http://localhost:8085/api/v1/genres`).then((res) => {
      const genres = res.data.genres;
      console.log("getting genres");
      console.log(res);
      setGenre(genres);
    });
    axios
      .get("http://localhost:8085/api/v1/artists?page=1&limit=50")
      .then((res) => {
        const artists = res.data.artists;
        console.log("getting genres");
        console.log(res);
        setArtist(artists);
      });
  }, []);

  function submitFiter(event) {
    // console.log(val1);
    event.preventDefault();
    const formNode = event.target;
    props.filterMovies({
      page: 1,
      limit: 20,
      title: formNode.name.value,
      genre: formNode.genre.value,
      artists: formNode.artists.value,
      start_date: formNode.start_date.value,
      end_date: formNode.end_date.value,
    });
  }

  // const handleChange = (event) => {
  //   console.log("on change");
  //   console.log(event);
  //   if (event.target.id === "demo-simple-select") {
  //     console.log(genre);
  //     setValSel1([...val1, event.target.value]);
  //   }
  //   if (event.target.id === "demo-simple-select2") {
  //     setValSel2(event.target.value);
  //   }
  // };

  const handleChanges = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    setSelected(value);
  };
  const handleChangess = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected1(selected1.length === options.length ? [] : options);
      return;
    }
    setSelected1(value);
  };
  console.log("art   ");
  console.log(artist);
  return (
    <div>
      <Paper style={{ padding: 20 }}>
        <form onSubmit={submitFiter}>
          <InputLabel color={"primary"} style={{ paddingBottom: 20 }}>
            Find Movies By
          </InputLabel>

          <FormControl className={classes.formControl}>
            <TextField name="name" label="Movie Name" style={{ width: 320 }} />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label" style={{ width: 320 }}>
              Genres
            </InputLabel>
            <Select
              labelId="mutiple-select-label"
              multiple
              value={selected}
              onChange={handleChanges}
              renderValue={(selected) => selected.join(", ")}
              style={{ width: 320 }}
              name="genre"
            >
              {genre.map((gen) => (
                <MenuItem
                  key={gen.genre}
                  value={gen.description}
                  style={{ width: 320 }}
                >
                  <ListItemIcon>
                    <Checkbox checked={selected.indexOf(gen.genre) > -1} />
                  </ListItemIcon>
                  <ListItemText primary={gen.genre} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label" style={{ width: 100 }}>
              Artist
            </InputLabel>
            <Select
              labelId="mutiple-select-label"
              multiple
              value={selected1}
              onChange={handleChangess}
              renderValue={(selected1) => selected1.join(", ")}
              style={{ width: 320 }}
              name="artists"
            >
              {artist.map((art) => (
                <MenuItem
                  key={art.id}
                  value={`${art.first_name} ${art.last_name}`}
                  style={{ width: 320 }}
                >
                  <ListItemIcon>
                    <Checkbox
                      checked={
                        selected1.indexOf(
                          `${art.first_name} ${art.last_name}`
                        ) > -1
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${art.first_name} ${art.last_name}`}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              label="Release Start Date"
              type="date"
              id="standard-basic"
              InputLabelProps={{ shrink: true }}
              style={{ width: 320 }}
              name="start_date"
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              label="Release End Date"
              type="date"
              id="standard-basic"
              InputLabelProps={{ shrink: true }}
              fullWidth={true}
              style={{ width: 320 }}
              name="end_date"
            />
          </FormControl>
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            children="APPLY"
            fullWidth={true}
            type="submit"
          />
        </form>
      </Paper>
    </div>
  );
}
// const mapStateToProps = (state) => ({ movies: state.movies });
// const mapDispatchToProps = (dispatch) => ({
//   dispatch, // ← Add this
// });

export default connect(null, { filterMovies })(FilterCard);
