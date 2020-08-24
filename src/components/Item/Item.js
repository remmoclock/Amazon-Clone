import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import CustomButton from "../CustomButton/CustomButton";

const styles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
  },
  cardImg: {
    height: "20rem",
    objectFit: "contain",
  },
  cardButton: {
    width: "100%",
  },
  cardPrice: {
      fontSize: "2rem",
      marginBottom: "2rem"
  },
  cardDescription: {
      fontWeight: 400,
      fontSize: "1.3rem",
      marginBottom: "2rem"
  }
});

function Item() {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div style={{ padding: "2rem" }}>
          <img
            className={classes.cardImg}
            src="https://m.media-amazon.com/images/I/71iO2R+CLjL._AC._SR360,460.jpg"
            alt=""
          />
        </div>
        <CardContent>
          <h1 className={classes.cardPrice}>500$</h1>
          <h2 className={classes.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            tempora?
          </h2>
          <StarRateIcon />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CustomButton
          style={{ width: "100%" }}
          className={classes.cardButton}
          text="Ajouter au panier"
        />
      </CardActions>
    </Card>
  );
}

export default Item;
