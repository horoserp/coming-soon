import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  VisuallyHidden,
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
        <VisuallyHidden>
          <FormLabel htmlFor="email">Email Address</FormLabel>
        </VisuallyHidden>
        <Flex
          className={`formContainer ${formik.errors.email ? "red" : ""}`}
          borderRadius={30}
          w={"100%"}
          h={55}
          pl={30}
        >
          <Input
            className="input"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            py={7}
            border={"none"}
            flexGrow={2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          <div>
            {formik.errors.email && (
              <Image
                src="/coming-soon/assets/images/icon-error.svg"
                alt="Exlamation point"
                h={"50%"}
                mt={3.5}
                mr={8}
              />
            )}
          </div>
          <Button
            className="button"
            id="button"
            type="submit"
            w={140}
            h={"100%"}
            rounded={30}
          >
            <Image
              src="/coming-soon/assets/images/icon-arrow.svg"
              alt="Submit"
            ></Image>
          </Button>
        </Flex>
        <FormErrorMessage className="error" ml={45} mt={2} fontSize={14}>
          {formik.errors.email}
        </FormErrorMessage>
      </FormControl>
    </form>
  );
};

export default EmailInput;
