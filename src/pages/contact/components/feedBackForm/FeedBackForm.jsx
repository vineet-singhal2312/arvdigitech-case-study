import "./FeedBackForm.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    color: "white",
  },
  messageTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 615,
    color: "white",
    [theme.breakpoints.down(750)]: {
      width: 300,
    },
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
    width: "400px",
    border: "1px solid red",

    "&:focus-visible": {
      border: "3px solid grey",
    },
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "60%",
  },
  checkbox: {
    color: "#cba14d",
  },
  yellow_color: {
    color: "#cba14d",
  },
  cardBtn: {
    marginTop: "1rem",
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
      width: 175,
    },
  },
}));
const FeedBackForm = () => {
  const classes = useStyles();

  return (
    <div className="feedback-form">
      <form className={classes.form} id="form" noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="First Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric",
          }}
        />
        <TextField
          id="standard-name"
          label="Last Name"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric",
          }}
        />
        <TextField
          id="standard-name"
          label="Phone"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric",
          }}
        />
        <TextField
          id="standard-name"
          label="Email"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric",
          }}
        />
        <TextField
          id="standard-name-msg"
          label="Message"
          className={classes.messageTextField}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric",
          }}
        />
      </form>
      <div className="submit-btn-div">
        {" "}
        <p>
          {" "}
          <Checkbox
            label="My checkbox"
            labelStyle={{ color: "#cba14d" }}
            iconStyle={{ fill: "white" }}
            inputStyle={{ color: "#cba14d" }}
            style={{ color: "#cba14d" }}
          />
          I agree to{" "}
          <label className={classes.yellow_color}>Term & Condition</label>
        </p>
        <Button variant="contained" color="primary" className={classes.cardBtn}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FeedBackForm;
