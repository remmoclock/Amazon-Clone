import React from "react";
import backgroundImage from "../../assets/amazon-bg.png";
import ItemList from "../../components/ItemList/ItemList";
import { useStyles } from "./HomeStyles";

const Home = ({ addItem, basket, removeItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <img className={classes.homePic} src={backgroundImage} alt="" />
      <ItemList basket={basket} addItem={addItem} removeItem={removeItem} />
    </div>
  );
};

export default Home;
