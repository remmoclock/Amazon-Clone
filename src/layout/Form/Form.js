import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo2 from "../../assets/amazon-logo2.png";
import CustomButton from "../../components/CustomButton/CustomButton";

const styles = makeStyles({
  login: {
    height: "100vh",
    backgroundColor: "#fff",
  },
  loginLogo: {
    width: "33%",
    objectFit: "contain",
  },
  container: {
    width: "35rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    border: "1px solid #ccc",
    borderRadius: 3,
    marginBottom: "3rem",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  loginTitle: {
    fontSize: "2.8rem",
    fontWeight: 400,
    marginBottom: "2rem",
  },
  loginLabel: {
    fontSize: "1.3rem",
    fontWeight: 700,
  },
  inputForm: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem",
    "& input": {
      height: "3rem",
      borderRadius: 3,
      border: "1px solid #aaa",
      fontSize: "1.4rem",
      padding: "0 1rem",
      "&:focus": {
        outlineColor: "orange",
      },
    },
  },
  divider: {
    color: "#767676",
    fontSize: "1.3rem",
    textAlign: "center",
    position: "relative",
    marginBottom: "2rem",
  },
});

const Form = ({ history }) => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email, password)
  }


  return (
    <section className={classes.login}>
      <div className={classes.container}>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <img className={classes.loginLogo} src={logo2} alt="Amazon Logo" />
          </Link>
        </div>
        <div className={classes.formContainer}>
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <h1 className={classes.loginTitle}>S'identifier</h1>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Adresse e-email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" />
            </div>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Mot de passe</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" />
            </div>
            <div className={classes.inputForm}>
              <CustomButton type="submit" text="S'identifier" />
            </div>
          </form>
          <CustomButton text="S'identifier avec Google" />
        </div>
        <div className={classes.divider}>
          <span>Nouveau chez Amazon ?</span>
        </div>
        <CustomButton onClick={() => history.push('/register')} type="button" text="Créer votre compte Amazon" />
      </div>
    </section>
  );
};

export default Form;
