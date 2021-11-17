import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { Link as Scroll } from "react-scroll";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "100vh",
    fontFamily: "Nunito",
  },

  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  icon: {
    fontSize: "2rem",
    color: "#fff",
  },
  appbarTitle: {
    flexGrow: "1",
  },

  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },

  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedSize={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}> MyIsland.</span>
          </h1>
          <Scroll to="place-to-visit" smooth="true">
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
