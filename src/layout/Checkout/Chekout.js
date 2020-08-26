import React from "react";
import { makeStyles } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";
import CustomButton from "../../components/CustomButton/CustomButton";

const useStyles = makeStyles((theme) => ({
  checkout: {
    padding: "3rem 2rem",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 0.5rem",
    },
  },
  checkoutItems: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    marginRight: "2rem",
  },
  checkoutDivider: {
    textAlign: "right",
    "&::after": {
      content: '""',
      display: "block",
      width: "100%",
      height: 1,
      background: "#ccc",
      marginTop: "1rem",
    },
  },
  subtotal: {
    width: "100%",
    marginLeft: "auto",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {},
  },
  subtotalCopy: {
    height: "50%",
    padding: "1rem",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.6rem",
      padding: "0.5rem",
    },
  },
  subtotalPrice: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "#eee",
    fontSize: "1.7rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "0.5rem",
    },
  },
  subtotalCurrencyFormat: {
    fontWeight: 700,
  },
  subtotalCheckbox: {
    fontSize: "1.3rem",
    display: "block",
    margin: "1rem 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
}));

const Checkout = ({ cart }) => {
  const classes = useStyles();

  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutItems}>
        <h1>Votre panier</h1>
        <div className={classes.checkoutDivider}>
          <h3>Prix</h3>
        </div>
        <h1>Pas d'articles dans votre panier.</h1>
      </div>
      <div style={{ width: "28%" }}>
        <div className={classes.subtotal}>
          <div className={classes.subtotalCopy}>
            Votre commande est éligible à la livraison Standard gratuite en
            France métropolitaine. restrictions applicables Choisissez cette
            option lors de votre commande
          </div>
          <div className={classes.subtotalPrice}>
            <span>
              {`Sous-total 2 articles`}{" "}
              <CurrencyFormat
                className={classes.subtotalCurrencyFormat}
                value={80}
                decimalScale={2}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"€"}
              />
            </span>
            <span className={classes.subtotalCheckbox}>
              <input type="checkbox" /> Commande comportant un cadeau
            </span>
            <CustomButton text="Passer la commande" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
