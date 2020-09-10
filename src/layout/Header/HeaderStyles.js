import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#131921",
    position: "sticky",
    top: 0,
  },
  amazonLogo: {
    height: "3rem",
  },
  buttons: {
    marginLeft: "auto",
  },
  appBarButton: {
    textTransform: "inherit",
    fontSize: '1.1rem',
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
  },
})
