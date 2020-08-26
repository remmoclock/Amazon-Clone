import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import logo2 from "../../assets/amazon-logo2.png";
import { Link } from "react-router-dom";
import { useStyles } from "./RegisterStyles";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { createUser } from "../../firebase/firebase";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Nom invalide";
  } else if (values.name.length > 15) {
    errors.name = "Maximum 15 caractères";
  }

  if (!values.email) {
    errors.email = "Email invalide";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalide";
  }

  if (!values.password) {
    errors.password = "Mot de passe invalide";
  } else if (values.password.length < 6) {
    errors.password = "Minimum 6 caractères.";
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = "Repeter mot de passe";
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
      createUser(values.email, values.password);
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <h1 className={classes.errorsForm}>
                  <ErrorOutlineIcon />
                  {formik.errors.name}
                </h1>
              )}
            </div>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Email</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                type="email"
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <h1 className={classes.errorsForm}>
                  <ErrorOutlineIcon />
                  {formik.errors.email}
                </h1>
              )}
            </div>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Mot de passe</label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="password"
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <h1 className={classes.errorsForm}>
                  <ErrorOutlineIcon />
                  {formik.errors.password}
                </h1>
              )}
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
                onBlur={formik.handleBlur}
              />
              {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                <h1 className={classes.errorsForm}>
                  <ErrorOutlineIcon />
                  {formik.errors.repeatPassword}
                </h1>
              )}
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
