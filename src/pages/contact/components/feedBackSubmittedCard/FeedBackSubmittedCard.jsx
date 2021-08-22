import React from "react";
import "./FeedBackSubmittedCard.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  cardImg: {
    width: "300px",
    height: "175px",
    cursor: "pointer",
  },

  cardBtn: {
    marginLeft: "0.5rem",
    backgroundColor: "#cba14d",
    opacity: "0.9",
    width: "125px",
    height: "50px",
    "&:hover": {
      backgroundColor: "#cba14d",
      opacity: "1",
    },
  },
  yellow_color: {
    color: "#cba14d",
  },
}));

const FeedBackSubmittedCard = () => {
  const classes = useStyles();

  return (
    <div className="feedback-submit-card">
      <img src="./Check_Image.png" alt="img" className={classes.cardImg} />
      <h2 className={classes.yellow_color}>Feedback Submitted</h2>
      <h4>Our Representative will contact you shortly</h4>
      <Button variant="contained" color="primary" className={classes.cardBtn}>
        OK
      </Button>
    </div>
  );
};

export default FeedBackSubmittedCard;
