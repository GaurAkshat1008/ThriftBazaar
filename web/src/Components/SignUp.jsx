import '../Styles/signIn.css';

const SignUp = () => {
    return (
        <div className="signupContainer" id="container">
            <div className="form-container sign-in-container">
                <form action="#">
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


                    {/* <a href="#">Forgot your password?</a> */}
                    <button className='signin-btn'>SIGN UP</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>Sign In to your account</p>
                        <a href="../signin">
                            <button className="signup-btn" id="signUp">SIGN IN</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
