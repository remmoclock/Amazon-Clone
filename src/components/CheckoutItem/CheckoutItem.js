import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CurrencyFormat from "react-currency-format";
import { useStyles } from "./CheckoutItemStyles";

const CheckoutItem = ({ item, removeItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutItem}>
      <img className={classes.imageItem} src={item.imageURL} alt={item.name} />
      <div className={classes.nameItem}>
        <h1>{item.name}</h1>
        <p>Quantité: {item.quantity}</p>
        <CustomButton
          text="Supprimer du panier"
          onClick={() => removeItem(item)}
        />
      </div>
      <div className={classes.priceItem}>
        <CurrencyFormat
          value={item.price}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"€"}
        />
      </div>
    </div>
  );
};

export default CheckoutItem;
