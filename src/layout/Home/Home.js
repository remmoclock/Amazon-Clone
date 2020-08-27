import React from "react";
import backgroundImage from "../../assets/home-fade.png";
import ItemList from "../../components/ItemList/ItemList";
import { useStyles } from "./HomeStyles";

const Home = ({addItem}) => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <img className={classes.homePic} src={backgroundImage} alt="" />
      <ItemList addItem={addItem} />
    </div>
  );
};

export default Home;
