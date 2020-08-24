import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AmazonLogo from '../../assets/amazon-logo.png';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#000",
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
});

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Link to="/">
          <img src={AmazonLogo} className={classes.amazonLogo} alt=""/>
          </Link>
          <div className={classes.buttons}>
            <Button className={classes.appBarButton} color="inherit">
              <span>Bonjour, identifiez-vous</span>
              <span>Se connecter</span>
            </Button>
            <Button className={classes.appBarButton} color="inherit"><ShoppingCartIcon /> Panier</Button>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

