import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";
import CustomButton from "../CustomButton/CustomButton";

const styles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    minHeight: "47rem",
    justifyContent: "space-between",
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
    marginBottom: "2rem",
  },
  cardDescription: {
    fontWeight: 400,
    fontSize: "1.3rem",
    marginBottom: "2rem",
  },
  cardStar: {
    fill: "#f3cf77",
    height: "2rem",
    width: "2rem",
  },
});

function Item({ imageURL, price, name, rating }) {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div style={{ padding: "2rem" }}>
          <img className={classes.cardImg} src={imageURL} alt="" />
        </div>
        <CardContent>
          <h1 className={classes.cardPrice}>{price}</h1>
          <h2 className={classes.cardDescription}>{name}</h2>
          {new Array(rating).fill().map((star, index) => (
            <StarRateIcon className={classes.cardStar} key={index} />
          ))}
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
