import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./ProductSearch.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem 1rem",
  },
  table_row: {
    margin: "0.5rem 0rem",
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "75px",
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "flex start",
    [theme.breakpoints.down(750)]: {
      height: "20px",
    },
  },
  paper2: {
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "100px",
    borderRadius: "2rem",
    display: "flex",
    justifyContent: "flex start",
  },
  button: {
    display: "block",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 420,
  },
  margin: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SearchBtn: {
    marginLeft: "4.5rem",
    backgroundColor: "#cba14d",
    opacity: "0.9",
    marginTop: "36px",
    height: "50px",
    "&:hover": {
      backgroundColor: "#cba14d",
      opacity: "1",
    },
    [theme.breakpoints.down(750)]: {
      marginLeft: "0.5rem",
    },
  },
}));

const ProductSearch = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="product-search">
      <Grid container spacing={3} className={classes.table_row}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper1}>
            <h3>Enter Product Name</h3>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper2}>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
              <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel id="demo-customized-select-label"></InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>Wheat</em>
                </MenuItem>
                <MenuItem value={10}>Rice</MenuItem>
                <MenuItem value={20}>dal</MenuItem>
                <MenuItem value={30}>Rava</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.SearchBtn}
            >
              Search
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductSearch;
