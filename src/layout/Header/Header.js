import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AmazonLogo from "../../assets/amazon-logo.png";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const useStyles = makeStyles({
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
});

const Header = ({ user, history }) => {
  // HOOKS
  const classes = useStyles();

  // FUNCTIONS
  const signOut = () => {
    auth.signOut();
    history.push('/')
  };

  // JSX
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Link to="/">
          <img src={AmazonLogo} className={classes.amazonLogo} alt="" />
        </Link>
        <div className={classes.buttons}>
          {user ? (
            <Button onClick={signOut} className={classes.appBarButton} color="inherit">
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
          <Button className={classes.appBarButton} color="inherit">
            <ShoppingCartIcon /> Panier
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
