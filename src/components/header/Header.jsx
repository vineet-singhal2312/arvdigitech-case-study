import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./Header.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "-3px 10px 6px -6px rgba(203,161,77,1)",
  },
  app_bar: {
    backgroundColor: "#0d0d0d",
  },
  menuButton: {
    flexGrow: 1,

    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  header_side_navigation: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  nav_bar_pages: {
    fontSize: "1rem",
    marginLeft: "1rem",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app_bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Link className="link" to="/">
              <div className={classes.nav_bar_pages}>HOME</div>
            </Link>
            <div className={classes.nav_bar_pages}>FAQs</div>
          </IconButton>

          <div className={classes.header_side_navigation}>
            <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
