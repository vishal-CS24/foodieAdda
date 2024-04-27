import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup"; // Import Yup
import styles from "../styles/LoginPage.module.css"; // Assuming this contains your external CSS
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useLogin();

  // Define custom regular expression for email validation
  const emailRegex =
    /^(?!.*\s)(?:(?:[^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})$/;

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, "Please enter a valid password")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema} // Pass the validation schema here
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            login();
            navigate("/home");
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="container text-center">
            <div className={`${styles.heading} text-2xl my-6`}>LOGIN HERE</div>
            <Field
              type="email"
              name="email"
              className={`${styles.email}`}
              placeholder="Enter Your Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs italic"
            />{" "}
            {/* Use your custom error styles */}
            <Field
              type="password"
              name="password"
              className={`${styles.email} my-3`}
              placeholder="Enter Your Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs italic"
            />{" "}
            {/* Use your custom error styles */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.loginButton}   `}
              >
                Login
              </button>
              {/* <SignIn path="/sign-in" routing="path" signUpUrl="/home" />
              <SignedOut>
                <SignInButton />
              </SignedOut> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
