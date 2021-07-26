import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Modalz from "./Modal";
import { useLocation } from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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

export default function Header() {
  const classes = useStyles();
  const location = useLocation();
  console.log("header " + location.pathname);
  console.log(location.pathname.toString() === "/details");
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Modalz />
    </div>
  );
  return (
    <div className="header">
      <img src={Logo} alt="React Logo" className="logo" />
      <div>
        {location.pathname.toString() === "/details" ? (
          <Button variant="contained" className="button1" onClick={handleOpen}>
            Book Show
          </Button>
        ) : (
          console.log("hello")
        )}
        <Button className="button2" variant="contained" onClick={handleOpen}>
          Login
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
