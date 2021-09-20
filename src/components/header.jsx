import React from "react";
import logo from "../images/logo.png";
import classes from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={classes.myHeader}>
      <img className={classes.myLogo} src={logo} alt='Logo' />
      <h1 className={classes.myTitle}>Statistic</h1>
    </div>
  );
};

export default Header;
