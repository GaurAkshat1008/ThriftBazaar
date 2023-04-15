import "../Styles/signIn.css";
import { register } from "../axios/axios";
import { toErrorMap } from "../../utils/toErrorMap";
import { Form, Formik } from "formik";
import { InputField } from "./InputField";
import { Box, Button } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <div className="signupContainer" id="container">
      <div className="form-container sign-in-container">
        {/* <form action="#">
                    <h1 className='form-logo'><span>Thrift</span>Bazaar</h1>
                    <h1>Sign Up</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div class="control-group">
                        <label class="control control-radio">
                            Buyer
                            <input type="radio" name="userType" />
                            <div class="control_indicator"></div>
                        </label>
                        <label class="control control-radio">
                            Seller
                            <input type="radio" name="userType" />
                            <div class="control_indicator"></div>
                        </label>
                    </div>


                    <button className='signin-btn'>SIGN UP</button>
                </form> */}
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
          {({isSubmitting, setFieldValue}) => (
            <Form>
              <h1 className="form-logo">
                <span>Thrift</span>Bazaar
              </h1>
              <h1>Sign up</h1>
              <Box mt={4}>
                <InputField
                  name="username"
                  type="text"
                  placeholder="Username"
                  label="Username"
                  w={"400px"}
                />
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
              <div class="control-group">
                <label class="control control-radio">
                  Buyer
                  <input
                    type="radio"
                    name="role"
                    required={true}
                    value="buyer"
                    onChange={() => {
                        setFieldValue("role", "buyer")
                    }}
                  />
                  <div class="control_indicator"></div>
                </label>
                <label class="control control-radio">
                  Seller
                  <input
                    type="radio"
                    name="role"
                    required={true}
                    value="seller"
                    onChange={() => {
                        setFieldValue("role", "seller")
                    }}
                  />
                  <div class="control_indicator"></div>
                </label>
              </div>
              <Button
                className="signin-btn"
                type="submit"
                isLoading={isSubmitting}
              >
                SIGN UP
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>Sign In to your account</p>
            <a href="../signin">
              <button className="signup-btn" id="signUp">
                SIGN IN
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
