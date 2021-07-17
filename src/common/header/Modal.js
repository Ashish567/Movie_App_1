import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import MaterialUIForm from "material-ui-form";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Modal() {
  const classes = useStyles();
  const [value, setValue] = React.useState({});

  //   const [choreDesc, setChoreDesc] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const submit = (e) => {
    // e.preventDefault();
    // get all values and pristineValues on form submission
    console.log("submitted");
    console.log(name);
    console.log(password);
    console.log(e);
    // console.log(pristineValues);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="LOGIN" {...a11yProps(0)} />
          <Tab label="REGISTER" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ textAlign: "center" }}>
        <MaterialUIForm onSubmit={(e) => submit(e)}>
          <FormControl>
            <InputLabel htmlFor="my-input">Username*</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Password*</InputLabel>
            <Input
              type="password"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>

          <br />
          <br />

          <Button
            variant="contained"
            color="primary"
            children="LOGIN"
            fullWidth={false}
            variant="raised"
            type="submit"
          />
        </MaterialUIForm>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ textAlign: "center" }}>
        <FormControl>
          <InputLabel htmlFor="my-input">First Name*</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Last Name*</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email*</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password*</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Contact No*</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" required />
        </FormControl>
        <br />
        <br />

        <Button
          variant="contained"
          color="primary"
          children="REGISTER"
          fullWidth={false}
        />
      </TabPanel>
    </div>
  );
}
