import "./Contact.css";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AiOutlineStar } from "react-icons/ai";
import FeedBackSubmittedCard from "./components/feedBackSubmittedCard/FeedBackSubmittedCard";
import FeedBackForm from "./components/feedBackForm/FeedBackForm";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    color: "white !important",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#cba14d !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },

  input: {
    width: "300px",
    border: "1px solid red",

    "&:focus-visible": {
      border: "3px solid grey",
    },
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    minHeight: "550px",
    width: "60%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  column1: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  column2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  navContact: {
    padding: "1rem",
    boxShadow: "0px 5px 4px -6px rgba(203,161,77,1)",
  },
}));
const Contact = () => {
  const classes = useStyles();

  return (
    <div className="main-container">
      <Header />
      <div className="page-content-div">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} className={classes.column1}>
            <h3 className={classes.navContact}>
              <AiOutlineStar /> Contact Us
            </h3>
          </Grid>
          <Grid item xs={12} sm={9} className={classes.column2}>
            <h1>Contact Us</h1>
          </Grid>
        </Grid>

        <FeedBackForm />
        <FeedBackSubmittedCard />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
