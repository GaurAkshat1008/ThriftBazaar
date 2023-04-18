import { Form, Formik, replace } from "formik";
import { InputField } from "./InputField";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { forgotPassword } from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { toErrorMap } from "../../utils/toErrorMap";

const ForgotPassword = () => {
    const navigate = useNavigate();
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
            email: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await forgotPassword(values.email);
            if (response.errors) {
                setErrors(toErrorMap(response.errors));
            } else if (response.data.message) {
                // console.log(response.data.message);
                navigate("/sent", { replace: true });
            }
          }}
        >
          {(props) => (
            <Form>
              <Text fontSize="2xl" fontWeight="bold" color="black" mb="10px">
                Forgot Password
              </Text>
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                label="Email"
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
                SEND
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
