import "./ProductSuperCard.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem 1rem",
  },
  table_row: {
    margin: "0rem 0rem",
  },
  paper1: {
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "75px",
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "flex start",
    [theme.breakpoints.down(750)]: {
      height: "30px",
    },
  },
  paper2: {
    paddingBottom: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    boxShadow: "none",
    minHeight: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  product_info: {
    marginTop: "2rem",
    textAlign: "initial",
    wordSpacing: "0.1rem",
  },
  cardImg: {
    width: "95%",
    height: "500px",
  },
}));

const ProductSuperCard = () => {
  const classes = useStyles();

  return (
    <div className="product-super-card">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper1}>
            <h2>What is Rice</h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper2}>
            <img
              className={classes.cardImg}
              src="https://image.izettle.com/product/1600x1600/8nIcXJ9GEeqZsR864GeZmw--gtLtuigEeqwX4x9X8lsOQ.jpeg"
              alt="img"
            />
            <div className={classes.product_info}>
              As a cereal grain, domesticated rice is the most widely consumed
              staple food for over half of the world's human population,[Liu 1]
              especially in Asia and Africa. It is the agricultural commodity
              with the third-highest worldwide production (rice, 741.5 million
              metric tons or 817.4 million short tons in 2014), after sugarcane
              (1.9 billion metric tons or 2.1 billion short tons) and maize (1.0
              billion metric tons or 1.1 billion short tons).[1] Since sizable
              portions of sugarcane and maize crops are used for purposes other
              than human consumption, rice is the most important food crop with
              regard to human nutrition and caloric intake, providing more than
              one-fifth of the calories consumed worldwide by humans.[2] There
              are many varieties of rice and culinary preferences tend to vary
              regionally.
              <label className={classes.yellow_color}>Read More</label>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductSuperCard;
