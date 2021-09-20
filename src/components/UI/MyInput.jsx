import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ setSearchValue }) => {
  return (
    <div className={classes.search}>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        className={classes.myInput}
        type='text'
        placeholder='Search...'
      />
    </div>
  );
};

export default MyInput;
