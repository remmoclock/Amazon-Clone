import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    appbar: {
      // backgroundColor: "#000",
      backgroundColor: "#232f3f",
      position: "sticky",
      top: 0,
    },
    amazonLogo: {
      height: "5rem",
    },
    buttons: {
      marginLeft: "auto",
    },
    appBarButton: {
      textTransform: "inherit",
      textAlign: "left",
      "& span": {
        display: "block",
      },
    },
    cardCount: {
      display: "inline",
      color: "orangered",
      marginLeft: 10,
      fontSize: "1.6rem",
    }
  });