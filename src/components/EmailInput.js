import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const EmailInput = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide a valid email")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "Email Address",
    },
    onSubmit: (values) => {
      alert("Thank you! We will send updates to: " + values.email);
    },
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl isInvalid={formik.touched.email && formik.errors.email}>
        <FormLabel htmlFor="email" className="visually-hidden">
          Email Address
        </FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>

      <Button type="submit">
        <img src="/coming-soon/assets/images/icon-arrow.svg" alt="Submit"></img>
      </Button>
    </form>
  );
};

export default EmailInput;
