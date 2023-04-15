import "../Styles/signIn.css";
import { login } from "../axios/axios";
import { toErrorMap } from "../../utils/toErrorMap";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import { Box, Button } from "@chakra-ui/react";

const SignIn = () => {
  return (
     <div className="signupContainer signIn" id="container">
      <div className="form-container sign-in-container">
        <Formik
            initialValues={{
                email: "",
                password: "",
                }}
            onSubmit={async (values, {setErrors}) => {
                console.log(values);
                const response = await login(values.email, values.password);
                if (response.errors) {
                    setErrors(toErrorMap(response.errors));
                    console.log(toErrorMap(response.errors));
                } else if (response.data.user) {
                    console.log(response.data.user);
                    
                }
            }}
        >
            {(props) => (
                <Form>
                    <h1 className="form-logo">
                        <span>Thrift</span>Bazaar
                    </h1>
                    <h1>Sign in</h1>
                    <Box mt={4}>
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Email"
                        label="Email"
                        w={"400px"}
                    />
                    </Box>
                    <InputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        label="Password"
                        w={"400px"}
                    />
                    <a href="#">Forgot your password?</a>
                    <Button className="signin-btn" type="submit" isLoading={props.isSubmitting}>
                        SIGN IN
                    </Button>
                </Form>
            )}
        </Formik>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Create a new account</p>
            <a href="../signup">
                <button className="signup-btn" id="signUp">
                SIGN UP
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
