import React from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  customButton: {
    backgroundColor: "#f3cf77",
    border: "1px solid #ccc",
    borderRadius: 1,
    cursor: "pointer",
    padding: "1rem 0",
    "&:hover": {
      backgroundColor: "#f0c350",
    },
    "&:focus": {
      outline: "none",
    },
  },
  google: {
    backgroundColor: "#4185f4",
    border: "1px solid #ccc",
    borderRadius: 1,
    cursor: "pointer",
    padding: "1rem 0",
    "&:hover": {
      backgroundColor: "#0226c3",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const CustomButton = ({ text, isGoogle, ...otherProps }) => {
  const classes = styles();
  return (
    <button {...otherProps} className={isGoogle ? classes.google : classes.customButton}>
      {text}
    </button>
  );
};

export default CustomButton;
