import "./FaqCard.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem 1rem",
  },
  table_row: {
    margin: "0.5rem 0rem",
  },
  paper1: {
    textAlign: "center",
    color: "#ffffff",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "75px",
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "flex start",
  },
  paper2: {
    paddingBottom: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    marginTop: "2rem",
    backgroundColor: "transparent",
    minHeight: "100px",
    boxShadow: "0px 5px 4px -6px rgba(203,161,77,1)",
  },
  paper3: {
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    minHeight: "50px",
    display: "flex",
    justifyContent: "flex start",
    alignItems: "center",
    boxShadow: "0px 5px 4px -6px rgba(203,161,77,1)",
  },
  paper4: {
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    boxShadow: "none",
    minHeight: "75px",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  question_card: {},
  question_card_question: {
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question_card_question_second: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question_card_info: {
    textAlign: "initial",
    wordSpacing: "0.1rem",
    color: "#93969f",
  },
  last_div: {
    color: "#cba14d",
  },
  yellow_color: {
    color: "#cba14d",
  },
}));

const FaqCard = () => {
  const classes = useStyles();

  return (
    <div className="faq-card">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper1}>
            <h1>FAQs</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper2}>
            <div className={classes.question_card}>
              <h3 className={classes.question_card_question}>
                How can i install dummy content ?{" "}
                <IoCloseSharp id="yellow-icon" />
              </h3>
              <div className={classes.question_card_info}>
                As a cereal grain, domesticated rice is the most widely consumed
                staple food for over half of the world's human population,[Liu
                1] especially in Asia and Africa. It is the agricultural
                commodity with the third-highest worldwide production (rice,
                741.5 million metric tons or 817.4 million short tons in 2014),
                after sugarcane (1.9 billion metric tons or 2.1 billion short
                tons) and maize (1.0 billion metric tons or 1.1 billion short
                tons).[1] Since sizable portions of sugarcane and maize crops
                are used for purposes other than human consumption, rice is the
                most important food crop with regard to human nutrition and
                caloric intake, providing more than one-fifth of the calories
                consumed worldwide by humans.[2] There are many varieties of
                rice and culinary preferences tend to vary regionally.
                <label className={classes.yellow_color}>Read More</label>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper3}>
            <h3 className={classes.question_card_question_second}>
              How i can install dummy content <AiOutlinePlus id="yellow-icon" />
            </h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper4}>
            <h2 className={classes.last_div}>Read more FAQ</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FaqCard;
