import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
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