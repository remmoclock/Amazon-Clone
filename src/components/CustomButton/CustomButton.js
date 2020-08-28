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
});

const CustomButton = ({ text, ...otherProps }) => {
  const classes = styles();
  return (
    <button {...otherProps} className={classes.customButton}>
      {text}
    </button>
  );
};

export default CustomButton;
