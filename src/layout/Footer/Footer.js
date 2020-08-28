import React from "react";
import amazonLogo from "../../assets/amazon-logo.png";
import { useStyles } from "./FooterSyles";

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
            by Remmo Ahmad
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
