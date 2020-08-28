import React from "react";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../../components/CustomButton/CustomButton";
import CurrencyFormat from "react-currency-format";

const useStyles = makeStyles((theme) => ({
  checkoutItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 0",
    borderBottom: "1px solid #ccc",
  },
  imageItem: {
    width: "20%",
    height: "100%",
    marginRight: "2rem",
    objectFit: "contain",
    textAlign: "left",
  },
  nameItem: {
    width: "100%",
    "& h1": {
      fontSize: "1.7rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      "& h1": {
        fontSize: "1rem",
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize: "0.7rem",
      },
    },
  },
  priceItem: {
    width: "10%",
    textAlign: "right",
    fontSize: "1.7rem",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  priceQuantity: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}));

const CheckoutItem = ({ item , removeItem }) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutItem}>
      <img className={classes.imageItem} src={item.imageURL} alt={item.name} />
      <div className={classes.nameItem}>
        <h1>{item.name}</h1>
        <p>Quantité: {item.quantity}</p>
        <CustomButton text="Supprimer du panier" onClick={() => removeItem(item)}/>

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
