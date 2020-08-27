import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useStyles } from "./CheckoutStyles";
import CheckoutItem from "../../components/ChekoutItem/CheckoutItem";

const Checkout = ({ basket }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = () => {
    const prices = []
    basket.map(item => prices.push(item.price * item.quantity))
    const totalPrice = prices.reduce((initValues, accumulator) => initValues + accumulator, 0)
    return totalPrice
  }

  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutItems}>
        <h1>Votre panier</h1>
        <div className={classes.checkoutDivider}>
          <h3>Prix</h3>
        </div>
        {basket.map((item, index) => (
          <CheckoutItem key={index} item={item} />
        ))}
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
              Sous-total ({basket.length}{" "}
              {basket.length > 1 ? "articles" : "article"}):{" "}
              <CurrencyFormat
                className={classes.subtotalCurrencyFormat}
                value={totalPrice()}
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
