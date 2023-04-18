import React from "react";
import { Flex, Box, Text, Button, Toast } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "./InputField";
import { changePassword } from "../axios/axios";
import { useParams } from "react-router-dom";
import { toErrorMap } from "../../utils/toErrorMap";

export const ChangePassword = () => {
  const { token } = useParams();
  console.log(token);
  return (
    <Flex h={"70vh"} justifyContent={"center"} mt={0}>
      <Box
        h={"50%"}
        mt={"auto"}
        mb={"auto"}
        boxShadow={"lg"}
        borderRadius={"2xl"}
      >
        <Formik
          initialValues={{
            password: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await changePassword(token, values.password);
            // console.log(values.password);
            // console.log(response);
            if(response.errors){
              setErrors(toErrorMap(response.errors));
            } else {
              <Toast status="success" title="Password Changed" />
              window.location.href = "/";
            }
          }}
        >
          {(props) => (
            <Form>
              <Text fontSize="2xl" fontWeight="bold" color="black" mb="10px">
                Change Password
              </Text>
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                label="password"
                width={"700px"}
                required={true}
              />
              <Button
                backgroundColor={"button"}
                borderRadius={"3xl"}
                type="submit"
                isLoading={props.isSubmitting}
                mt={4}
                p={4}
                width={"150px"}
              >
                Change
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
