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
import { useState, useEffect } from "react";
import { validateYupSchema } from "formik";
import TextField from "@material-ui/core/TextField";

import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import {
  registerUserAction,
  loginUserAction,
} from "../../Actions/authenticationActions";

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
    // width: 350,
  },
  tab: {
    minWidth: 300, // a number of your choice
    width: 350, // a number of your choice
  },
  bar: {
    width: 350,
  },
}));

function Modal(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);
  const [errors, setErrors] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [loginValues, setLoginFormValues] = React.useState({
    username: "",
    password: 0,
  });

  const [signUpValues, setsignUpFormValues] = React.useState({
    first_name: "",
    last_name: "",
    email_address: "",
    password: 0,
    mobile_number: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateFieldForLogin = (e) => {
    setLoginFormValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const updateFieldForSignUp = (e) => {
    setsignUpFormValues({
      ...signUpValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted yes");
    const elements = e.target.elements;
    if (e.target.id === "loginForm") {
      console.log("logging");
      console.log(loginValues);
      console.log(loginUserAction);
      props.dispatch(loginUserAction(loginValues));
    }
    if (e.target.id === "signUpForm") {
      console.log("signningUp");
      setShowResults(false);
      const temp = [false, false, false, false, false];
      for (let i = 0; i < elements.length - 1; i++) {
        console.log(elements[i].value);
        if (elements[i].value === "") {
          temp[i] = true;
          setShowResults(false);
        } else {
          setShowResults(true);
        }
      }
      console.log("debugger " + showResults);
      console.log(temp);
      setErrors(temp);
      if (temp.includes(true)) {
        setShowResults(false);
        console.log("dispatch here");
      }
      if (!temp.includes(false)) {
        console.log("yes");
        setShowResults(true);
        console.log("yes");
      }
      if (!temp.includes(true)) {
        console.log("f***********");
        console.log("Dispatching User Registration Action");
        console.log(signUpValues);
        console.log("breaker");
        props.dispatch(registerUserAction(signUpValues));
      }

      // if (errorFlag === false) setShowResults(true);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.tab}
        >
          <Tab label="LOGIN" {...a11yProps(0)} />
          <Tab label="REGISTER" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ textAlign: "center" }}>
        <form id="loginForm" onSubmit={submit}>
          <FormControl>
            <InputLabel htmlFor="my-input">Username*</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              required
              onChange={updateFieldForLogin}
              name="username"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Password*</InputLabel>
            <Input
              type="password"
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={updateFieldForLogin}
              name="password"
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
            style={{ backgroundColor: "blue", color: "white" }}
          />
        </form>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ textAlign: "center" }}>
        <form id="signUpForm" onSubmit={submit}>
          <FormControl>
            <TextField
              label="First Name*"
              id="my-input"
              aria-describedby="my-helper-text"
              name="first_name"
              onChange={updateFieldForSignUp}
              helperText={
                errors[0] ? <p style={{ color: "red" }}>required</p> : ""
              }
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Last Name*"
              id="my-input"
              aria-describedby="my-helper-text"
              name="last_name"
              onChange={updateFieldForSignUp}
              helperText={
                errors[1] ? <p style={{ color: "red" }}>required</p> : ""
              }
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Email*"
              id="my-input"
              aria-describedby="my-helper-text"
              name="email_address"
              onChange={updateFieldForSignUp}
              helperText={
                errors[2] ? <p style={{ color: "red" }}>required</p> : ""
              }
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Password*"
              id="my-input"
              type="password"
              aria-describedby="my-helper-text"
              name="password"
              onChange={updateFieldForSignUp}
              helperText={
                errors[3] ? <p style={{ color: "red" }}>required</p> : ""
              }
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Contact No*"
              id="my-input"
              aria-describedby="my-helper-text"
              name="mobile_number"
              onChange={updateFieldForSignUp}
              helperText={
                errors[4] ? <p style={{ color: "red" }}>required</p> : ""
              }
            />
          </FormControl>
          <br />
          <br />
          {showResults ? "Registration Successful. Please Login!" : null}
          {showResults ? <br /> : null}
          {showResults ? <br /> : null}

          <Button
            variant="contained"
            color="primary"
            children="REGISTER"
            fullWidth={false}
            variant="raised"
            type="submit"
            style={{ backgroundColor: "blue", color: "white" }}
          />
        </form>
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(Modal);
