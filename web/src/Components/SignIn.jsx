import "../Styles/signIn.css";
import { login } from "../axios/axios";
import { toErrorMap } from "../../utils/toErrorMap";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { redirect } from "react-router-dom";

const SignIn = () => {
  return (
    <Flex h={"70vh"} fontFamily={"monte"}>
      <Box
        pos={"absolute"}
        top={0}
        height={"100%"}
        left={0}
        w={"50%"}
        zIndex={2}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await login(values.email, values.password);
            if (response.errors) {
              setErrors(toErrorMap(response.errors));
            } else {
              window.location.href = "/";
            }
          }}
        >
          {(props) => (
            <Form>
              {/* <h1>Sign in</h1> */}
              <Text fontSize="2xl" fontWeight="bold" color="black" mb="10px">
                Sign In
              </Text>
              <Box mt={4}>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  w={"400px"}
                />
              </Box>
              <Box mt={4}>
                <InputField
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                  w={"400px"}
                />
              </Box>
              <a href="/forgotpassword">Forgot your password?</a>
              <Button
                type="submit"
                backgroundColor={"button"}
                isLoading={props.isSubmitting}
                mt={4}
              >
                SIGN IN
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box
        pos={"absolute"}
        top={0}
        left={"50%"}
        w={"50%"}
        h={"100%"}
        overflow={"hidden"}
        zIndex={100}
      >
        <Box
          bgColor={"button"}
          background={"linear-gradient(to right, #00ADB5, #38eaf3)"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"0 0"}
          color={"white"}
          left={"-100%"}
          position={"relative"}
          height={"100%"}
          width={"200%"}
          transform={"translateX(0)"}
          transition={"transform 0.6s ease-in-out"}
        >
          <Box
            pos={"absolute"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"coloumn"}
            top={"40%"}
            padding={"0 40px"}
            textAlign={"center"}
            h={"100%"}
            w={"50%"}
            left={"50%"}
            transform={"translateX(0)"}
            transition={"transform 0.6s ease-in-out"}
          >
            <Text fontSize="2xl" fontWeight="bold" color="white" mb="10px">
              Hello, Friend!
            </Text>
            <Text
              fontSize="md"
              fontWeight="100"
              color="white"
              mb="10px"
              lineHeight={"20px"}
              letterSpacing={"0.5px"}
              m={"20px 0 30px"}
            >
              Create a new account
            </Text>
            <a href="../signup">
              <button className="signup-btn" id="signUp">
                SIGN UP
              </button>
            </a>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignIn;
