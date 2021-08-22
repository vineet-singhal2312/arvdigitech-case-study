import React from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductTable from "./components/productTable/ProductTable";
import ProductCardList from "./components/poductCardList/ProductCardList";
import ProductSearch from "./components/productSearch/ProductSearch";
import FaqCard from "./components/faqCard/FaqCard";
import ProductSuperCard from "./components/productSuperCard/ProductSuperCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PieChartCard from "./components/pieChartCard/PieChartCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
const Home = () => {
  const classes = useStyles();

  return (
    <div className="main-container">
      <Header />
      <div className="page-content-div">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} className={classes.column1}>
            <Link to="/contact" className="link">
              {" "}
              <h3 className={classes.navContact}>
                <AiOutlineStar /> Contact Us
              </h3>
            </Link>
          </Grid>
          <Grid item xs={12} sm={9} className={classes.column2}>
            <h1>ARV Cast Study</h1>
          </Grid>
        </Grid>
        <PieChartCard />
        <FaqCard />
        <ProductTable />
        <ProductCardList />
        <ProductSearch />
        <ProductSuperCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
