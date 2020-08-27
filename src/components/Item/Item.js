import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";
import CustomButton from "../CustomButton/CustomButton";
import { useStyles } from "./ItemStyles";

function Item({ item , addItem }) {
  const { imageURL, price, name, rating } = item
  const classes = useStyles();

  // FUCTIONS
  const addToBasket = (item) => {
    addItem({
      ...item,
      quantity: 1
    })
  }


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
          onClick={() => addToBasket(item)}
        />
      </CardActions>
    </Card>
  );
}

export default Item;
