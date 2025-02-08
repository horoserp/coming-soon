import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Flex,
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
        <Flex
          className="formContainer"
          borderRadius={30}
          w={"100%"}
          h={"55px"}
          pl={25}
        >
          <Input
            className="input"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            py={10}
            border={"none"}
            flexGrow={2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <Button type="submit" w={"100px"} h={"100%"} rounded={"30px"}>
            <img
              src="/coming-soon/assets/images/icon-arrow.svg"
              alt="Submit"
            ></img>
          </Button>
        </Flex>
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>
    </form>
  );
};

export default EmailInput;
