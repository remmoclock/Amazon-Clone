import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/amazon-logo2.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useFormik } from "formik";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { loginUser } from "../../firebase/firebase";
import { useStyles } from "./FormStyles";
import {signGoogle} from "../../firebase/firebase";

// VALIDATION
const validate = (values) => {
  const errors = {};
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
  return errors;
};

const Form = ({ history }) => {
  // HOOKS
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      loginUser(values.email, values.password);
      history.push("/");
    },
  });

  // JSX
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
            <h1 className={classes.loginTitle}>S'identifier</h1>
            <div className={classes.inputForm}>
              <label className={classes.loginLabel}>Adresse e-email</label>
              <input
                value={formik.values.email}
                name="email"
                type="email"
                onChange={formik.handleChange}
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
                onBlur={formik.handleBlur}
                name="password"
                type="password"
              />
              {formik.touched.password && formik.errors.password && (
                <h1 className={classes.errorsForm}>
                  <ErrorOutlineIcon />
                  {formik.errors.password}
                </h1>
              )}
            </div>
            <div className={classes.inputForm}>
              <CustomButton type="submit" text="S'identifier" />
            </div>
          </form>
          <CustomButton onClick={() => signGoogle()} text="S'identifier avec Google" />
        </div>
        <div className={classes.divider}>
          <span>Nouveau chez Amazon ?</span>
        </div>
        <CustomButton
          onClick={() => history.push("/register")}
          type="button"
          text="Créer votre compte Amazon"
        />
      </div>
    </section>
  );
};

export default Form;
