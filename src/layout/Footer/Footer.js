import React from "react";
import { makeStyles } from "@material-ui/core";
import amazonLogo from "../../assets/amazon-logo.png";

const useStyles = makeStyles({
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

const Footer = () => {
  const classes = useStyles();
  const reload = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={classes.footer}>
      <div onClick={reload} className={classes.footerAction}>
        <p>Retour en haut</p>
      </div>
      <div className={classes.footerDetails}>
        <img className={classes.footerLogo} src={amazonLogo} alt="" />
        <ul className={classes.footerList}>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Conditions d'utilisation
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Protection de vos informations personnelles
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Aide
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Cookies
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => e.preventDefault()}>
              Annonces basées sur vos centres d'intérêt
            </a>
          </li>
        </ul>
        <div className={classes.footerCopy}>
          <p>
            Made with{" "}
            <span role="img" aria-label="heart">
              💗
            </span>{" "}
            by Julien Delusseau
          </p>
          <p className={classes.footerCopyMuted}>
            Clone du website Amazon - Projet personnel à but non lucratif
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
