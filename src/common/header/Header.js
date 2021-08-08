import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Modalz from "./Modal";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header(props) {
  console.log("header section");
  // console.log(localStorage.getItem("jwtToken"));
  console.log(props);
  const classes = useStyles();
  const location = useLocation();
  console.log("header " + location.pathname);
  console.log(location.pathname.toString() === "/details");
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(true);
  // if (localStorage.getItem("jwtToken")) setStatus("Log Out");
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("api hit login ");
  //   // if (localStorage.getItem("jwtToken")) setStatus("Log Out");
  // }, [status]);

  const handleOpen = () => {
    if (!localStorage.getItem("jwtToken")) {
      setOpen(true);
      setStatus(true);
    }
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setStatus(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Modalz />
    </div>
  );
  // <Link to="/bookshow" params={{ movieId: props.movieIdSelected }}></Link>
  return (
    <div className="header">
      <img src={Logo} alt="React Logo" className="logo" />
      <div>
        {location.pathname.toString() === "/details" ? (
          <Button variant="contained" className="button1">
            <Link
              to={{
                pathname: "/bookshow",
                selectedMovie: props.movieIdSelected,
              }}
            >
              {console.log("hello header")}
              {console.log(props.movieIdSelected)}
              Book Show
            </Link>
          </Button>
        ) : (
          console.log("hello")
        )}
        <Button className="button2" variant="contained" onClick={handleOpen}>
          {localStorage.getItem("jwtToken") !== null ? "Log Out" : "Log In"}
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("finding header state");
  console.log(state);
  return {
    loginStatus: state.login,
    movieIdSelected: state.movie.movie.id,
  };
};

export default connect(mapStateToProps, null)(Header);
