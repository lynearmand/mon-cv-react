import HomeIcon from "@mui/icons-material/Home";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import useLayoutsStyles from "src/assets/layout";

const Navbar: FunctionComponent = () => {
  const styles = useLayoutsStyles();

  return (
    <AppBar position="static" className="styles.navbar">
      <Toolbar>
        <IconButton
          size="large"
          color="secondary"
          edge="start"
          aria-label="home"
          sx={{ mr: 2 }}
        >
          <Link to="/">
            <HomeIcon sx={{ color: "#003566" }} />
          </Link>
        </IconButton>
      </Toolbar>
      <Outlet />
    </AppBar>
  );
};
export default Navbar;
