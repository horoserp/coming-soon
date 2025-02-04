import React from "react";
import { useFormik } from "formik";

const EmailInput = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "Email Address",
    },
    onSubmit: (values) => {
      alert("Thank you! We will send updates to: " + values.email);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">
        <img src="/coming-soon/assets/images/icon-arrow.svg" alt="Submit"></img>
      </button>
    </form>
  );
};

export default EmailInput;
