import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterCard() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Paper style={{ padding: 20 }}>
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            style={{ width: 320 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" style={{ width: 100 }}>
            Artist
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            style={{ width: 320 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
          />
        </FormControl>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          children="APPLY"
          fullWidth={true}
        />
      </Paper>
    </div>
  );
}
