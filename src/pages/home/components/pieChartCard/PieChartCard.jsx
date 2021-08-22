import "./PieChartCard.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Slider from "@material-ui/core/Slider";
import { usePieChart } from "../../../../provider/pieChartProvider/PieChartProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 250,
  },
  input: {
    border: "4px solid #cba14d",
    borderRadius: "5px",
    width: "75px",
    height: "40px",
    backgroundColor: "transparent",
    [theme.breakpoints.down(750)]: {
      border: "1px solid #cba14d",
      width: "40px",
      height: "30px",
    },
  },
  slider_row: {
    margin: "0rem",
    [theme.breakpoints.down(750)]: {
      marginLeft: "1rem 0rem",
    },
  },
  table_row: {
    margin: "0.5rem 0rem",
    width: "90%",
    [theme.breakpoints.down(750)]: {
      width: "90%",
      margin: "0rem",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    height: "100%",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down(750)]: {
      padding: 0,
    },
  },
  paper2Heading: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  paper2: {
    padding: theme.spacing(2),
    color: "#ffffff",
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "initial",
    fontSize: "0.9rem",
  },

  cardBtn: {
    marginLeft: "0.5rem",
    backgroundColor: "#cba14d",
    opacity: "0.8",
    width: "325px",
    height: "50px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#cba14d",
      opacity: "1",
    },
    [theme.breakpoints.down(750)]: {
      width: "250px",
      marginLeft: "0rem",
      margin: "3rem 0rem",
    },
  },
  yellow_color: {
    color: "#cba14d",
  },
}));

const PieChartCard = () => {
  const classes = useStyles();

  const { state, setState } = usePieChart();
  const data02 = [
    { name: "Travel", value: state.travelValue },
    { name: "Food", value: state.foodValue },
    { name: "Movie", value: state.moviesValue },
    { name: "Hotel", value: state.hotelValue },
  ];
  const COLORS = ["#ff4d4d", "#ff3377", "#0099ff", "#009966"];

  const handleSliderChangeTravel = (event, newValue) => {
    setState((state) => {
      return {
        ...state,
        travelValue: newValue,
      };
    });
  };
  const handleSliderChangeFood = (event, newValue) => {
    setState((state) => {
      return {
        ...state,
        foodValue: newValue,
      };
    });
  };
  const handleSliderChangeMovies = (event, newValue) => {
    setState((state) => {
      return {
        ...state,
        moviesValue: newValue,
      };
    });
  };
  const handleSliderChangeHotel = (event, newValue) => {
    setState((state) => {
      return {
        ...state,
        hotelValue: newValue,
      };
    });
  };
  const reCalculatePieChart = () => {
    setState((state) => {
      return {
        travelValue: 25,
        foodValue: 30,
        moviesValue: 60,
        hotelValue: 10,
      };
    });
  };

  return (
    <div className="pie-chart-card">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Grid
              container
              spacing={6}
              className={classes.slider_row}
              alignItems="center"
            >
              <Grid item className={classes.inputHeading}>
                Travel
              </Grid>
              <Grid item xs>
                <Slider
                  className="p-0"
                  value={
                    typeof state.travelValue === "number"
                      ? state.travelValue
                      : 0
                  }
                  onChange={handleSliderChangeTravel}
                  aria-labelledby="input-slider"
                  id="slider"
                />
              </Grid>
              <Grid item>
                <input
                  className={classes.input}
                  value={`${state.travelValue}k`}
                  id="input1"
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              alignItems="center"
              className={classes.slider_row}
            >
              <Grid item className={classes.inputHeading}>
                Food
              </Grid>
              <Grid item xs>
                <Slider
                  value={
                    typeof state.foodValue === "number" ? state.foodValue : 0
                  }
                  onChange={handleSliderChangeFood}
                  aria-labelledby="input-slider"
                  id="slider"
                />
              </Grid>
              <Grid item>
                <input
                  className={classes.input}
                  value={`${state.foodValue}k`}
                  id="input2"
                />
              </Grid>
            </Grid>{" "}
            <Grid
              container
              spacing={6}
              alignItems="center"
              className={classes.slider_row}
            >
              <Grid item className={classes.inputHeading}>
                Movies
              </Grid>
              <Grid item xs>
                <Slider
                  value={
                    typeof state.moviesValue === "number"
                      ? state.moviesValue
                      : 0
                  }
                  onChange={handleSliderChangeMovies}
                  aria-labelledby="input-slider"
                  id="slider"
                />
              </Grid>
              <Grid item>
                <input
                  className={classes.input}
                  value={`${state.moviesValue}k`}
                  id="input3"
                />
              </Grid>
            </Grid>{" "}
            <Grid
              container
              spacing={6}
              alignItems="center"
              className={classes.slider_row}
            >
              <Grid item className={classes.inputHeading}>
                Hotel
              </Grid>
              <Grid item xs>
                <Slider
                  value={
                    typeof state.hotelValue === "number" ? state.hotelValue : 0
                  }
                  onChange={handleSliderChangeHotel}
                  aria-labelledby="input-slider"
                  id="slider"
                />
              </Grid>
              <Grid item>
                <input
                  className={classes.input}
                  value={`${state.hotelValue}k`}
                  id="input4"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PieChart width={250} height={250}>
              <Pie
                dataKey="value"
                data={data02}
                cx={125}
                cy={125}
                innerRadius={80}
                outerRadius={120}
                fill="#82ca9d"
              >
                {data02.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.cardBtn}
              onClick={() => reCalculatePieChart()}
            >
              Re Calculate Pie Chart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PieChartCard;
