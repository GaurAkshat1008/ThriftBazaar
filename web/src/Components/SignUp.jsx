import "../Styles/signIn.css";
import { register } from "../axios/axios";
import { toErrorMap } from "../../utils/toErrorMap";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const SignUp = () => {
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
            username: "",
            email: "",
            password: "",
            role: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await register(
              values.username,
              values.email,
              values.password,
              values.role
            );
            if (response.errors) {
              setErrors(toErrorMap(response.errors));
            } else if (response.data.user) {
              console.log(response.data.user);
            }
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <Text fontSize="2xl" fontWeight="bold" color="black" mb="10px">
                Sign Up
              </Text>
              <Box mt={4}>
                <InputField
                  name="username"
                  type="text"
                  placeholder="Username"
                  label="Username"
                  w={"400px"}
                />
              </Box>
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
              <Flex direction={"row"}>
                <label class="control control-radio">
                  Buyer
                  <Input
                    type="radio"
                    name="role"
                    required={true}
                    value="buyer"
                    onChange={() => {
                      setFieldValue("role", "buyer");
                    }}
                  />
                  <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                  Seller
                  <Input
                    type="radio"
                    name="role"
                    required={true}
                    value="seller"
                    onChange={() => {
                      setFieldValue("role", "seller");
                    }}
                  />
                  <div class="control_indicator"></div>
                </label>
              </Flex>
              <Button
                className="signin-btn"
                type="submit"
                isLoading={isSubmitting}
                bgColor={"button"}
                mt={4}
              >
                SIGN UP
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
              Welcome Back!
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
              Sign In to your account
            </Text>

            <a href="../signin">
              <button className="signup-btn" id="signUp">
                SIGN IN
              </button>
            </a>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
