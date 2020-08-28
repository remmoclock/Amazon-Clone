import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  footer: {
    width: "100%",
    color: "#fff",
  },
  footerAction: {
    width: "100%",
    cursor: "pointer",
    padding: "2rem 0",
    textAlign: "center",
    backgroundColor: "#364759",
    "&:hover": {
      backgroundColor: "#48576a",
    },
  },
  footerDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 0",
    backgroundColor: "#232f3f",
  },
  footerLogo: {
    height: "2rem",
    objectFit: "contain",
  },
  footerList: {
    display: "flex",
    margin: "2rem auto",
    "& li:not(:last-child)": {
      marginRight: "2rem",
    },
    "& li a": {
      color: "#fff",
      fontSize: "1.3rem",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  footerCopy: {
    textAlign: "center",
  },
  footerCopyMuted: {
    fontSize: "1.3rem",
    color: "#ccc",
  },
});
