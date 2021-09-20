import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, createModal }) => {
  return (
    <button onClick={() => createModal()} className={classes.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;
