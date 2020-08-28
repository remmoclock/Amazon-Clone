import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AmazonLogo from "../../assets/amazon-logo.png";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useStyles } from "./HeaderStyles";

const Header = ({ user, history, basket }) => {
  // HOOKS
  const classes = useStyles();

  // FUNCTIONS
  const signOut = () => {
    auth.signOut();
    history.push("/");
  };

  // JSX
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Link to="/">
          <img src={AmazonLogo} className={classes.amazonLogo} alt="logo" />
        </Link>
        <div className={classes.buttons}>
          {user ? (
            <Button
              onClick={signOut}
              className={classes.appBarButton}
              color="inherit"
            >
              <span>Bonjour, {user.email}</span>
              <span>Se déconnecter</span>
            </Button>
          ) : (
            <Button
              component={Link}
              to="/login"
              className={classes.appBarButton}
              color="inherit"
            >
              <span>Bonjour, Identifiez-vous</span>
              <span>Se connecter</span>
            </Button>
          )}
          <Button
            component={Link}
            to="/checkout"
            className={classes.appBarButton}
            color="inherit"
          >
            <ShoppingCartIcon /> Panier{" "}
            <div className={classes.cardCount}>{basket.length}</div>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
