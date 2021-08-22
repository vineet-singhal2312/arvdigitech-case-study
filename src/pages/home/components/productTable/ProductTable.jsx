import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./ProductTable.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table_row: {
    margin: "0.5rem 0rem",
    boxShadow: "0px 5px 4px -6px rgba(203,161,77,1)",
    width: "90%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    height: "100px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  paper2Heading: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    height: "75px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  paper2: {
    padding: theme.spacing(2),
    color: "#ffffff",
    height: "75px",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "initial",
    fontSize: "0.9rem",
  },
  paper2div: {
    marginLeft: "12rem",
  },
}));

const tableInfo = [
  {
    Category: "Staples",
    ProductName: "Rice",
    Website: "Amazon",
    Offers: "Loren ipsum dolor sit amet adipiscing elit, sed do incididunt ut.",
  },
  {
    Category: "Staple",
    ProductName: "Dal",
    Website: "Bigbasket",
    Offers: "Loren ipsum dolor sit amet adipiscing elit, sed do incididunt ut.",
  },
  {
    Category: "Staple",
    ProductName: "Wheat",
    Website: "Flipkart",
    Offers: "Loren ipsum dolor sit amet adipiscing elit.",
  },
];

const ProductTable = () => {
  const classes = useStyles();
  return (
    <div className="product-table d-hidden d-md-flex">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <h3>Category</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <h3>Product Name</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>
            <h3>Website</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>
            <h3>Offers</h3>
          </Paper>
        </Grid>
      </Grid>
      {tableInfo.map((product, idx) => {
        return (
          <Grid key={idx} container spacing={3} className={classes.table_row}>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper2Heading}>
                {product.Category}
              </Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper2}>{product.ProductName}</Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper2}>{product.Website}</Paper>
            </Grid>
            <Grid item xs={6} sm={5}>
              <div className={classes.paper2div}>
                <Paper className={classes.paper2}>{product.Offers}</Paper>
              </div>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default ProductTable;
