import "./ProductCardList.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table_row: {
    margin: "0.5rem 0rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#404040",
    boxShadow: "none",
    width: "250px",
    height: "225px",
    borderRadius: "2rem",
  },

  column: {
    display: "grid",
    placeItems: "center",
  },
  cardImg: {
    width: "125px",
    height: "100px",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.5",
      content: `url(https://tse4.mm.bing.net/th?id=OIP.y7uk_q0aqNOyHpz0xMCJSQHaCU&pid=Api&P=0&w=570&h=179)`,
    },
  },
  cardBtnDiv: {
    display: "flex",
  },
  cardBtn: {
    marginLeft: "0.5rem",
    backgroundColor: "#cba14d",
    opacity: "0.9",

    "&:hover": {
      backgroundColor: "#cba14d",
      opacity: "1",
    },
  },
}));

const ProductCardList = () => {
  const classes = useStyles();
  return (
    <div className="product-list">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={3} className={classes.column}>
          <Paper className={classes.paper}>
            <img
              className={classes.cardImg}
              src="https://media.istockphoto.com/photos/rice-in-bag-picture-id177288178"
              alt="img"
            />
            <div className={classes.cardBtnDiv}>
              <h2>Rice</h2>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardBtn}
              >
                Add to cart
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.column}>
          <Paper className={classes.paper}>
            <img
              className={classes.cardImg}
              src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1741144.jpg"
              alt="img"
            />
            <div className={classes.cardBtnDiv}>
              <h2>Wheat</h2>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardBtn}
              >
                Add to cart
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.column}>
          <Paper className={classes.paper}>
            <img
              className={classes.cardImg}
              src="https://i1.wp.com/foodstampsnow.com/wp-content/uploads/2019/01/Benefits-of-lentils.jpg?ssl=1"
              alt="img"
            />
            <div className={classes.cardBtnDiv}>
              <h2>Dal</h2>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardBtn}
              >
                Add to cart
              </Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.column}>
          <Paper className={classes.paper}>
            <img
              className={classes.cardImg}
              src="https://image.izettle.com/product/1600x1600/8nIcXJ9GEeqZsR864GeZmw--gtLtuigEeqwX4x9X8lsOQ.jpeg"
              alt="img"
            />
            <div className={classes.cardBtnDiv}>
              <h2>Rava</h2>
              <Button
                variant="contained"
                color="primary"
                className={classes.cardBtn}
              >
                Add to cart
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCardList;
