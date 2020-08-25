import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import logo2 from "../../assets/amazon-logo2.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";

export const useStyles = makeStyles({
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
  },
  loginForm: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
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
  dividerLink: {
    color: "#0066c0",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  formCopy: {
    fontSize: "1.2rem",
    marginTop: "2rem",
  },
});

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Requis";
  } else if (values.password.length < 6) {
    errors.password = "Minimum 6 caractères.";
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = "Requis";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Mots de passe ne correspondent pas!";
  }

  return errors;
};

const Register = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert("It worked");
    },
  });

  return (
    <section className={classes.login}>
      <div className={classes.container}>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <img className={classes.loginLogo} src={logo2} alt="Amazon Logo" />
          </Link>
        </div>
        <div className={classes.formContainer}>
          <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
            <h1 className={classes.loginTitle}>Créer un compte</h1>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Votre nom</label>
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                type="text"
              />
            </div>
            {formik.errors.name && <h1>{formik.errors.name}</h1>}
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>E-email</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                type="email"
              />
              {formik.errors.email && <h1>{formik.errors.email}</h1>}
            </div>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Mot de passe</label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="password"
              />
              {formik.errors.password && <h1>{formik.errors.password}</h1>}
            </div>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>
                Entrez le mot de passe à nouveau
              </label>
              <input
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                name="repeatPassword"
                type="password"
              />
              {formik.errors.repeatPassword && <h1>{formik.errors.repeatPassword}</h1>}
            </div>
            <CustomButton type="submit" text="Créer votre compte Amazon" />
            <p className={classes.formCopy}>
              En créant un compte, vous acceptez les Conditions générales de
              vente d’Amazon. Veuillez consulter notre Notice Protection de vos
              Informations Personnelles, notre Notice Cookies et notre Notice
              Annonces publicitaires basées sur vos centres d’intérêt.
            </p>
          </form>
        </div>
        <div className={classes.divider}>
          <span>Vous possédez déjà un compte ?</span>{" "}
          <Link className={classes.dividerLink} to="/login">
            Identifiez-vous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
