import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
